<template>
  <v-card width="300" class="pa-2 mx-auto mt-16">
    <v-card-title class="text-center">
      <h1 class="display-1">Sign Up</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-account-circle"
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="success" @click="register">Sign Up</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  ...mapActions(['register']),
  methods: {
    register() {
      this.$store
        .dispatch('register', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/')
        })
    },
  },
}
</script>

<style></style>
