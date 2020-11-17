<template>
  <div>
    <ListsNavigation />
    <div>YALLA {{ id }}</div>
  </div>
</template>

<script>
import List from '@/models/List'
import ListsNavigation from '@/components/ListsNavigation'

export default {
  name: 'Link',
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      list: null,
    }
  },
  created() {
    List.find(list_id)
  },
  components: { ListsNavigation },
}
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid green;
}
</style>
