import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

import store from '../store'

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.loggedIn) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.loggedIn) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/lists',
    name: 'lists',
    beforeEnter: ifAuthenticated,
    component: () => import('../views/Lists.vue')
  },
  {
    path: '/stats',
    name: 'stats',
    beforeEnter: ifAuthenticated,
    component: () => import('../views/Stats.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    beforeEnter: ifAuthenticated,
    component: () => import('../views/Dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
