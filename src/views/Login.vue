<template>
  <v-card width="300" class="mx-auto mt-5">
    <v-card-title class="text-center">
      <h1 class="display-1">Login</h1>
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
      <v-btn color="success" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  computed: {
    credentials() {
      return {
        email: this.email,
        password: this.password,
      }
    },
  },
  methods: {
    login() {
      this.$store
        .dispatch('retrieveToken', this.credentials)
        .then(() => this.$router.push('/'))
        .catch((error) => {
          this.$notify({
            group: 'main',
            type: 'error',
            title: 'Fail',
            text: error,
          })
        })
    },
  },
}
</script>
