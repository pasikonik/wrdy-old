import api from '@/lib/api'
import JsonApiResponseConverter from 'json-api-response-converter'
import Word from '@/models/Word'

const WordModule = {
  mutations: {
    ADD_WORD(_state, newWord) {
      const data = new JsonApiResponseConverter(newWord).formattedResponse
      Word.insert({ data })
    },
  },
  actions: {
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
