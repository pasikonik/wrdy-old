<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline mr-5">
        <v-icon large> mdi-alpha-w-circle-outline </v-icon>
        Wrdy
      </v-toolbar-title>
      <v-toolbar-items v-if="loggedIn">
        <v-btn v-for="item in nav" :key="item.icon" :to="item.path" text>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn v-if="loggedIn" @click="logout" text>
        [{{ currentUser }}]
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>

      <v-toolbar-items v-if="!loggedIn">
        <v-btn to="/login" text> Login </v-btn>
        <v-btn to="/registration" text> Sign Up </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        <strong>Wrdy</strong> — {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { authComputed } from '@/store/helpers'

export default {
  name: 'App',
  data() {
    return {
      nav: [
        {
          icon: 'mdi-home',
          text: 'Home',
          path: '/',
        },
        {
          icon: 'mdi-format-list-bulleted-square',
          text: 'Lists',
          path: '/lists',
        },
        {
          icon: 'mdi-chart-bar',
          text: 'stats',
          path: '/stats',
        },
        {
          icon: 'mdi-file-download-outline',
          text: 'import',
          path: '/import',
        },
      ],
    }
  },
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch('destroyToken')
    },
  },
}
</script>
