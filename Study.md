# Vue Study

> 2019.03.30

- template 
    - router를 사용하여 보여줄 템플릿을 정의한다.

- export default
    - 외부에서 쓸수있도록 export한다.

- data 
    - template 내부에서 사용할 데이터들을 정의한다.

- {{ }}
    - template 내부에서 출력하는 방식이다.

- v-bind:속성="변수명" 
    - 특정 속성과 바인딩 하는역할을 한다.

#### 조건문과 반복문

- v-if="변수명"
    - 해당 변수의 논리값 을 판단하여 해당 태그를 보여준다.

- v-for="변수명 in list변수명"
    - 해당 변수의 리스트를 반복하여 출력한다.
    
```javascript
<template>

  <div class="hello">
    <h1>{{ Vue }}</h1>
    <span v-bind:title="message">zz</span>
    <p v-if="like">좋아요를 눌러주세요.</p>
    <ol>
      <li v-for="drink in drinks">
        {{ drink.text }}, {{ drink.kind }}
      </li>
    </ol>
  </div>

</template>

<script>
export default {
  name: 'HelloVue',
  data () {
    return {
      Vue: 'Hi Vue!!',
      message: '이 페이지는' + new Date(),
      like: false,
      drinks: [
        {text: '콜라', kind: '탄산'},
        {text: '사이다', kind: '탄산'},
        {text: '밀키스', kind: '탄산'},
        {text: '환타', kind: '탄산'}
      ]
    }
  }
}
</script>
```


#### 사용자 입력 핸들링

- v-on:이벤트명="함수명"
  - 해당 이벤트 에 메서드를 바인딩하여 호출 한다.

```javascript
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
```