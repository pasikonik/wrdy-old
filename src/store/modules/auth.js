import jwtDecode from 'jwt-decode'

import api from '/@/lib/api'
import User from '/@/models/User'

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
      User.insert({ data: user })
      state.currentUser = user
    },
  },
  actions: {
    retrieveToken({ commit, dispatch }, credentials) {
      return new Promise((resolve, reject) => {
        api
          .post('login', credentials)
          .then(({ auth_token }) => {
            commit('SET_TOKEN', auth_token)
            setTimeout(() => dispatch('fetchCurrentUser'), 2000)
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
      api.get(`users/${user_id}`).then((user) => {
        commit('SET_CURRENT_USER', user)
      })
    },
  },
}

export default AuthModule
