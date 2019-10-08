<template>
  <div class="app">
    <div class="nav">
      <router-link to="/login">Login</router-link>|
      <router-link to="/registration">Register</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

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
