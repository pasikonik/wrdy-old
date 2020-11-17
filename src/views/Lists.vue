<template>
  <v-card height="400" width="256">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> My lists </v-list-item-title>
          <v-list-item-subtitle> amount: 0 </v-list-item-subtitle>
          <v-list-item-subtitle> words: 0 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <div class="d-inline-flex">
            <v-text-field
              label="Solo"
              placeholder="New list name"
              v-model="newListName"
              solo
            ></v-text-field>
            <v-btn
              @click="addList"
              color="primary"
              elevation="3"
              class="newListButton"
              large
            >
              <v-icon large> mdi-plus-box-outline </v-icon>
            </v-btn>
          </div>
        </v-list-item>
        <v-list-item> nowości... </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    item: 1,
    newListName: '',
    items: [{ title: 'Main' }, { title: 'Favorites' }, { title: 'Known' }],
  }),
  methods: {
    addList() {
      this.$store.dispatch('addList', { name: this.newListName })
    },
  },
}
</script>

<style lang="scss" scoped>
.newListButton {
  margin-top: 2px;
}
</style>
