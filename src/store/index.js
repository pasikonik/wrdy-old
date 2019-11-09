import Vue from 'vue';
import Vuex from 'vuex';

import UserModule from './modules/user';
import AuthModule from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: AuthModule,
    um: UserModule
  }
});
