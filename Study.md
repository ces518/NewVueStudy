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

- DOM 을 조작하지않고 상태를 업데이트 한다.
- 모든 DOM 조작은 Vue에 의해 처리되며 , 작성한 코드는 기본로직에만 초점을 맞춘다.

- v-model="data변수명"
  - 해당 변수에 해당하는 모델을 양방향으로 바인딩 해준다.

```javascript
<template>
  <div class="hello">
    <p>{{ message }}</p>
    <input v-model="message"/>
    <button v-on:click="reverse">메세지 뒤집기</button>
  </div>
</template>

<script>
export default {
  name: 'model',
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

#### 템플릿 문법

- 보간법
  
  - 문자열 
  데이터 바인딩의 가장 기초적인 형태는  Mustache {{ }} 를 활용한 텍스트 보간이다.
  Mustache 태그는 해당 데이터 속성의 값을 바인딩하여 출력한다.

  v-once 디렉티브를 활용하면 데이터가 업데이트 되지않는 일회성 보간이지만
  같은 노드의 바인딩에도 영향을 미친다.
```javascript
  <div class="hello">
    <p v-once> 수정불가: {{ message }}</p>
    <button type="button" v-on:click="changeMessage">메시지 변경</button>
  </div>
```

- 원시 HTML
  - Mustache 태그는 해당 하는 데이터를 HTML이 아닌 일반 텍스트로 데이터를 해석한다.
  - 실제 HTML을 출력하려면 v-html디렉티브를 사용해야한다.
  - span 태그의 내용은 realHTML의 내용으로 대체된다.
  - 이때 데이터 바인딩은 무시된다.
  - Vue는 문자열 기반 템플릿 엔진이 아니기때문에 v-html을 통해 템플릿사용이 불가능하다.
  - 컴포넌트는 UI 재사용 및 구성을 위한 기본단위로 사용해야한다.
  - * 웹사이트에서 임의의 HTML을 동적으로 랜더링하면 XSS 취약점이 발생하므로 지양해야함.
```javascript
<p>HTML 출력 : <span v-html="realHTML"></span></p>
```
  
