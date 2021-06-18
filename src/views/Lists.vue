<template>
  <ListsNavigation>
    <div class="content">
      <div>Jump</div>
    </div>
  </ListsNavigation>
</template>

<script>
import List from "/@/models/List";
import ListsNavigation from "/@/layouts/ListsNavigation";

export default {
  name: "Links",
  components: { ListsNavigation },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
</style>
