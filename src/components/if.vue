<template>
  <div>
    <div v-if="condition > 1">조건1</div>
    <div v-else-if="condition > 2">조건2</div>
  </div>
</template>

<script>
export default {
  name: 'if',
  data () {
    return {
      condition: 1
    }
  }
}
</script>

<style scoped>

</style>
