import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import User from '@/models/User'

import user from './modules/user'
import list from './modules/list'
import auth from './modules/auth'

const database = new VuexORM.Database()
database.register(User)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    user,
    list,
  },
  plugins: [VuexORM.install(database)],
})
