import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './lib/api';
import Notifications from 'vue-notification';

Vue.config.productionTip = false;

Vue.prototype.$api = api;

Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
