import api from '/@/lib/api'
import Word from '/@/models/Word'

const WordModule = {
  mutations: {
    ADD_WORD(_state, newWord) {
      Word.insert({ data: newWord })
    },
    SET_WORDS(_state, words) {
      Word.insert({ data: words })
    },
  },
  actions: {
    fetchWords({ commit }, list_id) {
      return new Promise(async (resolve, reject) => {
        try {
          const words = await api.get(`lists/${list_id}/words`)
          commit('SET_WORDS', words)
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    },
    addWord({ commit }, params) {
      return new Promise(async (resolve, reject) => {
        try {
          const word = await api.post('words', params)
          commit('ADD_WORD', word)
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    },
  },
}

export default WordModule
