<template>
  <div class="d-flex">
    <v-card height="calc(100vh - 100px)" width="256">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> My lists </v-list-item-title>
            <v-list-item-subtitle>
              amount: {{ lists.length }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list dense nav>
          <v-list-item
            v-for="list in lists"
            :key="list.name"
            :to="{ name: 'list', params: { id: list.id } }"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ list.name }}</v-list-item-title>
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
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <slot></slot>
  </div>
</template>

<script>
import List from '@/models/List'

export default {
  name: 'ListsNavigation',
  data: () => ({
    lists: [],
    newListName: '',
  }),
  created() {
    this.fetchLists()
  },
  methods: {
    async fetchLists() {
      await this.$store.dispatch('getLists')
      const lists = await List.all()
      this.lists = lists
    },
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
