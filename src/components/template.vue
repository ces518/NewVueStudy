<template>
  <div class="hello">
    <p v-once> 수정불가: {{ message }}</p>
    <button type="button" v-on:click="changeMessage">메시지 변경</button>
    <p>HTML 출력 : <span v-html="realHTML"></span></p>
    <div v-bind:class="dynamicClass" v-on:click="changeClass">v-bind 동적클래스</div>
    <button v-bind:disabled="isDisabled">버튼</button>
    {{ 1 + 1 }}
    {{ isDisabled ? 'YES' : 'NO' }}
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      message: '안녕하세요.',
      realHTML: '<em style="color: red;">EM태그 사용</em>',
      dynamicClass: 'bear',
      isDisabled: true
    }
  },
  methods: {
    changeMessage () {
      this.message = '안녕못해요'
    },
    changeClass () {
      if (this.dynamicClass === 'bear') {
        this.dynamicClass = 'bear-2'
      } else {
        this.dynamicClass = 'bear'
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
.bear {
  color: red;
}
.bear-2{
  color: blue;
}
</style>
