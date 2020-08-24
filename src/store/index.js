import Vue from 'vue'
import Vuex from 'vuex'
// import api from '@/lib/api'
import { jsonapiModule } from 'jsonapi-vuex'
import axios from 'axios'

import user from './modules/user'
import auth from './modules/auth'

Vue.use(Vuex)

const getToken = () => sessionStorage.getItem('token')

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer ${getToken()}`,
  },
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    user,
    jv: jsonapiModule(api),
  },
})
