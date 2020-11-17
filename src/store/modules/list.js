import api from '@/lib/api'

const ListModule = {
  state: {
    lists: [],
  },
  mutations: {
    ADD_LIST(state, newList) {
      state.lists.push(newList)
    },
  },
  actions: {
    async addList({ commit }, params) {
      try {
        const list = await api.post('lists', params)
        commit('ADD_LIST', list)
      } catch (error) {
        console.error(error)
      }
    },
  },
}

export default ListModule
