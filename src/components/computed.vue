<template>
  <div class="hello">
    <p> 원본 메세지 : {{ message }}</p>
    <p> 역순으로 표시한 메시지 : {{ reversedMessage }}</p>
    <input v-model="data"/>
    <button @click="validate">중복검사</button>
    {{ isValid ? '중복검사완료' : '중복검사를 해주세요.' }}

    <input v-model="computedMessage"/>
    <p> 계산된 메시지 : {{ computedMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      message: '안녕하세요.',
      data: '초기 데이터',
      isValid: false,
      msg: '기본값'
    }
  },
  computed: {
    reversedMessage () {
      // 여기서 this는 무조건 vue 객체를 가리킨다.
      return this.message.split('').reverse().join('')
    },
    computedMessage: {
      get () {
        return this.msg
      },
      set (newValue) {
        this.msg = newValue + '추가추가'
      }
    }
  },
  watch: {
    data () {
      this.isValid = false
    }
  },
  methods: {
    validate () {
      this.isValid = true
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
