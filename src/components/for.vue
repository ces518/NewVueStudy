<template>
  <div>
    <ul>
      <li v-for="data in list" :key="data" v-text="data"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'for',
  data () {
    return {
      list: [
        1, 2, 3, 4, 5, 6, 7
      ]
    }
  }
}
</script>

<style scoped>

</style>
