import api from '@/lib/api'
import JsonApiResponseConverter from 'json-api-response-converter'
import List from '@/models/List'

const ListModule = {
  state: {
    lists: [],
  },
  mutations: {
    ADD_LIST(state, newList) {
      state.lists.push(newList)
    },
    SET_LISTS(_state, lists) {
      const result = new JsonApiResponseConverter(lists).formattedResponse
      List.insert({ data: result })
    },
  },
  actions: {
    async getLists({ commit }) {
      try {
        const lists = await api.get('lists')
        commit('SET_LISTS', lists)
      } catch (error) {
        console.error(error)
      }
    },
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
