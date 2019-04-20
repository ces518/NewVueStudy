<template>
  <div class="hello">
    <p>{{ message }}</p>
    <button v-on:click="reverse">메세지 뒤집기</button>
  </div>
</template>

<script>
export default {
  name: 'on',
  data () {
    return {
      message: '안녕하세요.'
    }
  },
  methods: {
    reverse () {
      this.message = this.message.split('').reverse().join('')
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
