<template>
  <div>
    <h2>Registration</h2>
    <form @submit.prevent="register">
      <label for="email">
        Email
        <input type="text" name="email" v-model="email" />
      </label>
      <label for="password">
        Password
        <input type="password" name="password" v-model="password" />
      </label>
      <button type="submit">Register!</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  ...mapActions(['register']),
  methods: {
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
