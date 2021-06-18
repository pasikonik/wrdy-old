import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/@/components/HelloWorld.vue'
import store from '/@/store'
// import Home from '/@/views/Home.vue'
import Login from '/@/views/Login.vue'
import Registration from '/@/views/Registration.vue'
// import Lists from '/@/views/Lists.vue'
// import List from '/@/views/List.vue'

const ifNotAuthenticated = (_to, _from, next) => {
  if (!store.getters.loggedIn) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (_to, _from, next) => {
  if (store.getters.loggedIn) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
