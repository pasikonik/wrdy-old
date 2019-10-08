<template>
  <form @submit.prevent="submit">
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
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submit() {
      console.log('cos');
    }
  }
};
</script>

<style scoped>
form {
  width: 200px;
}
</style>
