<template>
  <div class="app">
    <notifications group="main" />

    <ul class="nav">
      <li v-if="isAuthenticated">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li v-if="isAuthenticated">
        <a href="#">Logout</a>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/registration">Register</router-link>
      </li>
    </ul>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['destroyToken']),
    logout() {
      this.$store.dispatch('destroyToken')
    }
  }
}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
