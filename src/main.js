import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Notifications)

new Vue({
  router,
  store,
  vuetify,
  created() {
    store.dispatch('fetchCurrentUser')
  },
  render: (h) => h(App),
}).$mount('#app')
