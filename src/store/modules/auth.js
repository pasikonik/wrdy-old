const jwtDecode = require('jwt-decode')

import api from '@/lib/api'

const AuthModule = {
  state: {
    token: sessionStorage.getItem('token') || null,
    currentUser: {}
  },
  getters: {
    loggedIn: state => !!state.token,
    token: state => state.token,
    currentUser: state => state.currentUser
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      sessionStorage.setItem('token', token)
    },
    DESTROY_TOKEN() {
      sessionStorage.removeItem('token')
      location.reload()
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    retrieveToken({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        api
          .post('/login', credentials)
          .then(({ auth_token }) => {
            commit('SET_TOKEN', auth_token)
            resolve(auth_token)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyToken({ commit }) {
      return new Promise(resolve => {
        commit('DESTROY_TOKEN')
        resolve()
      })
    },
    fetchCurrentUser({ commit, state: { token } }) {
      if (!token) return

      const { user_id } = jwtDecode(token)
      api.get(`/users/${user_id}`).then(user => {
        debugger
        commit('SET_CURRENT_USER', user)
      })
    }
  }
}

export default AuthModule
