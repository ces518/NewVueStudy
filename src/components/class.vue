<template>
  <div class="hello">
    <div v-text="msg" v-bind:class="{active: isActive}"></div>
    <div v-bind:class="classObj">안녕하세요</div>
    <div v-bind:class="[activeClass,noActiveClass]">안녕하신가요?</div>
  </div>
</template>

<script>
export default {
  name: 'class',
  data () {
    return {
      msg: '메시지',
      isActive: true,
      classObj: {
        active: true,
        no_active: true
      },
      activeClass: 'active',
      noActiveClass: 'no_active'
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
