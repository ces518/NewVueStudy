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


- Computed 와 Watch
  
   - Computed 속성
    - 템플릿 내에 표현식을 사용하지만 편리하지만 , 연산이 장황 할 수록 유지보수하기 어려워진다.
    - 복잡한 로직이라면 반드시 computed속성을 사용 해야한다.
    
```javascript
<template>
  <div class="hello">
    <p> 원본 메세지 : {{ message }}</p>
    <p> 역순으로 표시한 메시지 : {{ reversedMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      message: '안녕하세요.'
    }
  },
  computed: {
    reversedMessage () {
      // 여기서 this는 무조건 vue 객체를 가리킨다.
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
```

- Computed 와 Method의 차이
  - Computed 속성은 매번 연산을 새로 진행하는것이 아니라 캐싱해 두었다가
  - 재 호출시 캐싱된 결과를 리턴해준다.
  - 성능적인 이점을 가져온다.
  - Date.now()처럼 아무 곳에도 의존하지 않는 computed 속성의 경우 절대로 업데이트되지 않는다.
  


- Computed 속성과 Watch 속성
  - vuejs에는 Vue 인스턴스의 데이터를 감시하고 , 데이터 변경시 콜백되는 watch 속성을 제공한다.
  - input의 데이터가 변경되면 isValid의 값이 false로 변경되어 중복검사를 다시 실행해야한다.
```javascript
<template>
  <div class="hello">
    <p> 원본 메세지 : {{ message }}</p>
    <p> 역순으로 표시한 메시지 : {{ reversedMessage }}</p>
    <input v-model="data"/>
    <button @click="validate">중복검사</button>
    {{ isValid ? '중복검사완료' : '중복검사를 해주세요.' }}
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      message: '안녕하세요.',
      data: '초기 데이터',
      isValid: false
    }
  },
  computed: {
    reversedMessage () {
      // 여기서 this는 무조건 vue 객체를 가리킨다.
      return this.message.split('').reverse().join('')
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
```

- Computed 속성의 Setter 함수
  - Computed 속성은 기본적으로 getter함수만 가지고 있지만 , 필요에 따라서 setter함수를 정의하여
  사용할 수 있다.
  - setter함수를 사용하면 해당 속성이 변경될때마다 콜백함수로 동작한다.
```javascript
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
```

- Watch속성 
  - 대부분의 경우에는 Computed속성이 적합하지만 , 감시자 속성이 필요 한 경우가 있다.
  - watch 속성은 감시할 데이터를 지정하고 , 이에 대한 변경으로 비동기 또는 시간이 오래걸리는 조작을 사용할때 유용하다.
  - watch 속성을 사용하면 비동기 연산 을 수행하고, 자주 수행하는지 제한하고, 최종 응답을 얻을 때까지 중간 상태를 설정할 수 있습니다. 
  - Computed 속성은 이러한 기능을 수행할 수 없습니다. 
  

- 클래스와 스타일 바인딩
  - 데이터 바인딩은 엘리먼트의 클래스와 인라인 스타일을 조작하기위해 사용된다.
  - v-bind속성을 사용해 처리할 수 있다.


##### HTML 클래스 바인딩

- 객체구문
  - 클래스를 동적으로 전달하기위해 v-bind:class를 활용하여 객체에 전달 할 수 있다.
```javascript
<template>
  <div class="hello">
  // isActive의 true,false 값에 따라 active 클래스가 할당된다.
    <div v-text="msg" v-bind:class="{active: isActive}"></div>
  </div>
</template>

<script>
export default {
  name: 'class',
  data () {
    return {
      msg: '메시지',
      isActive: true
    }
  }
}
</script>
```
  - v-bind:class에 할당된 객체가 반드시 인라인일 필요는없다.
  - 인라인으로 바인딩 한 것과 같은결과로 랜더링되며 , computed속성으로도 같은 결과를 도출 할 수 있다.
```javascript
<div v-bind:class="classObj">안녕하세요</div>
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
      }
    }
  }
}
</script>
```
     
- 배열구문
  - v-bind:class에 배열을 전달하여 class를 지정 할 수 있다.
```javascript
<div v-bind:class="[activeClass,noActiveClass]">안녕하신가요?</div>
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
```


##### HTML 스타일 바인딩

- 객체 구문
  - v-bind:style 은 매우 직설적이다.
  - css처럼 보이지만 , javascript 객체이다.
  - 속성명에 camelCase 와 kebab-case (따옴표 같이사용해야함) 을 사용할 수 있다.
  - 인라인 바인딩 보다는 , 객체 바인딩을 통하여 템플릿을 깔끔하게 하는것이 좋다.
```javascript
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
```

# 조건부 랜더링

- v-if
  - v-if 와 v-else 를 활용하여 조건부 랜더링이 가능하다.
  - v-else는 v-if 또는 v-else-if 바로뒤에 있어야하며 조건이 필요없다.
```javascript
<div>
  <div v-if="condition > 1">조건1</div>
  <div v-else-if="condition > 2">조건2</div>
</div>
```

- v-show
  - 사용법은 v-if와 거의 일치한다.
  - 차이점은 v-show는 항상 DOM에 랜더링되며, display속성이 토글된다.
  
일반적으로 v-if는 토글 비용이 크고, v-show는 초기 랜더링 비용이 크다.
자주바뀌는 것이라면 v-show 런타임시 변하지않는다면 v-if를 사용할것.


# 리스트 렌더링

- v-for
  - v-for 디렉티브를 활용하여 배열기반으로 리스트랜더링을 할 수 있다.
  - v-for 디렉티브는 item in items 형태의 문법으로 items 가 원본배열이고
  - item 이 반복되는 앨리먼트의 별칭이다. 
  - 두번째 인자로 index를 받아올수 있다.
```javascript
<div>
  <ul>
    <li v-for="(data, index) in list" :key="data" v-text="data"></li>
  </ul>
</div>
```
- 배열 변경
  - 뷰는 다음과 같은 메서드가 변이 메서드를 트리거한다. 
  - 해당 메서드들의 호출될때 재 랜더링된다.
    - push()
    - pop()
    - shift()
    - unshift()
    - splice()
    - sort()
    - reverse()===========8===========888=
  - 변이 메서드는 원본 배열을 변경한다.
  
- 배열 대체
  - 변이 메서드는 원본 배열을 변경하지만 아래의 메서드들은 새로운 배열을 생성하여 대체한다. 
  - filter(), concat(), slice()
  - 기존 DOM을 버리고 재랜더링하는것이 아닌 객체가 겹치는 다른 배열로 대체하여 효율적임
