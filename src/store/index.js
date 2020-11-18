import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import User from '@/models/User'
import List from '@/models/List'
import Word from '@/models/Word'

import user from './modules/user'
import list from './modules/list'
import word from './modules/word'
import auth from './modules/auth'

const database = new VuexORM.Database()
database.register(User)
database.register(List)
database.register(Word)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    user,
    list,
    word,
  },
  plugins: [VuexORM.install(database)],
})
