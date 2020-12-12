<template>
  <ListsNavigation>
    <div class="content" v-if="list">
      <h1 class="d-flex align-center" v-if="list">
        <v-avatar rounded color="blue" size="36" class="mr-3">
          <v-icon dark> mdi-format-list-bulleted </v-icon>
        </v-avatar>
        {{ list.name }}
      </h1>
      <div>words: {{ list.words.length }}</div>

      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="newWordOrigin"
                label="Origin"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="5">
              <v-text-field
                v-model="newWordTranslation"
                label="Translation"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="2" class="pt-6">
              <v-btn block color="primary" @click="addWord"> Add </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <div v-for="word in list.words" :key="word.id">
        {{ word.origin }} - {{ word.translation }} - {{ word.proficiency }}
      </div>
    </div>
  </ListsNavigation>
</template>

<script>
import List from '@/models/List'
import ListsNavigation from '@/layouts/ListsNavigation'

export default {
  name: 'Link',
  props: ['id'],
  data() {
    return {
      list: false,
      newWordOrigin: '',
      newWordTranslation: '',
    }
  },
  created() {
    this.getData()
  },
  computed: {
    wordParams() {
      return {
        origin: this.newWordOrigin,
        translation: this.newWordTranslation,
        list_id: this.list.id,
      }
    },
  },
  methods: {
    async getData() {
      await this.$store.dispatch('fetchWords', this.id)
      this.list = List.find(this.id)
    },
    addWord() {
      this.$store.dispatch('addWord', this.wordParams).then(() => {
        this.newWordOrigin = ''
        this.newWordTranslation = ''
      })
    },
  },
  components: { ListsNavigation },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 30px;
  border: 1px solid green;
}
</style>
