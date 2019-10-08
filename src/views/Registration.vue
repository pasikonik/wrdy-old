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
import api from '../lib/api';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      api.post('/register', {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
