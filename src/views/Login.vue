<template>
  <form @submit.prevent="login">
    <label for="email">
      Email
      <input type="text" name="email" v-model="email" />
    </label>

    <label for="password">
      Password
      <input type="password" name="password" v-model="password" />
    </label>
    <button type="submit">Subtmit</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    credentials() {
      return {
        email: this.email,
        password: this.password
      };
    }
  },
  methods: {
    ...mapActions(['retrieveToken']),
    async login() {
      try {
        await this.$store.dispatch('retrieveToken', this.credentials);
        this.$router.push('dashboard');
      } catch (error) {
        this.$notify({
          group: 'main',
          type: 'error',
          title: 'Fail',
          text: error
        });
      }
    }
  }
};
</script>

<style scoped>
form {
  width: 200px;
  margin: auto;
}
</style>
