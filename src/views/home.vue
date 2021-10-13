<template>
  <div class="home">
    <ul class="list-group">
      <Card
        v-for="item in list"
        :key="item.url"
        :title="item.title"
        :tags="item.tags"
        :url="item.url"
      />
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Card from '../components/card.vue'
export default {
  components: {
    Card
  },
  setup () {
    const store = useStore()
    const list = computed(() => store.state.list)
    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 300px;
  margin: 0 auto;
}

</style>