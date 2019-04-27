<template>
  <div class="hello">
    <p v-once> 수정불가: {{ message }}</p>
    <button type="button" v-on:click="changeMessage">메시지 변경</button>
    <p>HTML 출력 : <span v-html="realHTML"></span></p>
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      message: '안녕하세요.',
      realHTML: '<em style="color: red;">EM태그 사용</em>'
    }
  },
  methods: {
    changeMessage () {
      this.message = '안녕못해요'
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
</style>
