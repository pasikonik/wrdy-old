import api from '@/lib/api'

const AuthModule = {
  state: {
    token: sessionStorage.getItem('token') || null
  },
  getters: {
    loggedIn: state => !!state.token,
    token: state => state.token
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      sessionStorage.setItem('token', token)
    },
    DESTROY_TOKEN() {
      sessionStorage.removeItem('token')
      location.reload()
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        api
          .post('/login', credentials)
          .then(({ auth_token }) => {
            context.commit('SET_TOKEN', auth_token)
            resolve(auth_token)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        context.commit('DESTROY_TOKEN')
      }
    }
  }
}

export default AuthModule
