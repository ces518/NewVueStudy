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
  
- 속성
  - Mustache는 HTML속성에서 사용할수 없다. 대신 v-bind:속성을 사용해야한다.
  - v-bind:class로 인해 dynamicClass모델과 바인딩되고 , v-on:click이벤트 발생시 
  - div의 클래스 속성이 동적으로 변한다.
```javascript
<div v-bind:class="dynamicClass" v-on:click="changeClass">v-bind 동적클래스</div>
```  
  
  - boolean 값을 이용할때는 다르게 동작한다.
  - 해당 boolean 값이 false , undefined일경우 에는 해당 속성이 태그에 포함되지않은 채로 랜더링된다.
```javascript
<button v-bind:disabled="isDisabled">버튼</button>
```

- javascript 표현식
  - Vue js 는 모든 데이터 바인딩 내에서 javascript 표현식의 기능을 지원한다.
  - 아래의 표현식은 vue 인스턴스 데이터 범위 내에서 javascript로 계산된다.
  - 제약 사항은 각 바인딩 당 하나의 단일 표현식만 가능하다.
```javascript
    {{ 1 + 1 }}
    {{ isDisabled ? 'YES' : 'NO' }}
    <!-- 아래는 표현식이 아님-->
    {{ var a = 'test' }}
    <!-- if문은 동작하지않는다. 삼항 연산자를 사용할것. -->
    {{ if(isDisabled) { return 'NO'} }}
```
  - 템플릿 표현식은 샌드박스 처리되며 , javascript 전역객체 (Math,Date...) 등과 같은것들만 접근이 가능하다.
  

- 디렉티브
  - 디렉티브는 v- 접두사가 붙어 있는 특수속성이다.
  - 디렉티브 속성은 단일 Javascript 표현식사용이 가능하다. (v-for 는 예외)
  - 디렉티브 의 역할은 표현식의 값이 변경될때 해당 값의 변화를 DOM에 적용 하는것이다.

```javascript
<div v-if="isVisable">내가 보이나요</div>
``` 

- v-if 디렉티브는 isVisable 의 boolean값에 의해 div 엘리먼트가 랜더링 혹은 제거 된다.


- 전달 인자
  - 일부 디렉티브는 콜론으로 표시되는 '전달인자' 를 사용할 수 있다.
  - 예로 v-bind 디렉티브는 반응적으로 html 속성을 갱싱하는데 사용된다.
 
```javascript
<a v-bind:href="URL">이동</a>
```

- 여기서 href 는 전달인자 이다.
- href의 속성값을 URL의 값에 바인드한다.



- 수식어
  - 수식어는 . (점) 으로 표시되는 특수 접미사로 , 디렉티브를 특별한 방법으로 바인딩 한다.
  - 예로 .prevent 수식어는 트리거된 이벤트에서 event.preventDefault()를 호출해야함을 디렉티브에게 알려준다.
  
```javascript
<a v-on:click.prevent="changeMessage">preventDefault()</a>
```


- 약어
  - vuejs 에서 자주 사용되는 디렉티브인 v-bind 와 v-on 디렉티브에 대한 약어를 제공한다.
  
```javascript
<!-- 기존 방식 -->
<a v-bind:href="URL">이동</a>
<!-- 약어 방식 -->
<a :href="URL">이동</a>

<!-- 기존 방식 -->
<a v-on:click.prevent="changeMessage">preventDefault()</a>
<!-- 약어 방식 -->
<a @click.prevent="changeMessage">preventDefault()</a>
```  
