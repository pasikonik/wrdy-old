import api from '../../lib/api'

const UserModule = {
  actions: {
    async register({ commit }, params) {
      try {
        const user = await api.post('/users', params)
        commit('SET_CURRENT_USER', user)
      } catch (error) {
        console.error(error)
      }
    },
  },
}

export default UserModule
