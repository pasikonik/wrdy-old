import api from '../../lib/api'

const AuthModule = {
  state: {
    token: sessionStorage.getItem('token') || null
  },
  getters: {
    isAuthenticated: state => !!state.token
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        api
          .post('/login', credentials)
          .then(({ data: { access_token } }) => {
            sessionStorage.setItem('token', access_token)
            context.commit('retrieveToken', access_token)
            resolve(access_token)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyToken(context) {
      if (context.getters.isAuthenticated) {
        sessionStorage.removeItem('token')
        context.commit('destroyToken')
      }
    }
  }
}

export default AuthModule
