<template>
  <div class="hello">
    <div v-bind:style="{ color: colorActive }">빨간</div>
    <div v-bind:style="styleObj">곰</div>
  </div>
</template>

<script>
export default {
  name: 'style',
  data () {
    return {
      msg: '메시지',
      colorActive: 'red',
      styleObj: {
        color: 'red',
        fontSize: '30px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  color: #ccc;
}
</style>
