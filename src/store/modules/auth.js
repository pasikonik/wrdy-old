import jwtDecode from 'jwt-decode'
import JsonApiResponseConverter from 'json-api-response-converter'

import api from '@/lib/api'
// import User from '@/models/User'

const AuthModule = {
  state: {
    token: sessionStorage.getItem('token') || null,
    currentUser: {},
  },
  getters: {
    loggedIn: (state) => !!state.token,
    token: (state) => state.token,
    currentUser: (state) => state.currentUser,
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
      state.currentUser = new JsonApiResponseConverter(user).formattedResponse
    },
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
          .catch((error) => {
            reject(error)
          })
      })
    },
    destroyToken({ commit }) {
      return new Promise((resolve) => {
        commit('DESTROY_TOKEN')
        resolve()
      })
    },
    fetchCurrentUser({ commit, state: { token } }) {
      if (!token) return

      const { user_id } = jwtDecode(token)
      // User.find(user_id)
      api.get(`users/${user_id}`).then((user) => {
        commit('SET_CURRENT_USER', user)
      })
    },
  },
}

export default AuthModule
