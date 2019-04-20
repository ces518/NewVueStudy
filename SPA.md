# SPA 체험하기

### SPA 란 ?
- Single Page Application (단일페이지 어플리케이션) 의 약자로 특정 리소스 요청시 페이지 전체가 리로드되는게아니라 특정부분만 리로드되는 것이 특징이다.

- 앵귤러, 뷰, 리액트가 대표적인 프레임워크이며
- 버츄얼돔방식이라 속도가 빠르고 데이터 바인딩 형식이라 , 데이터가 변경되어도 자동적으로 반영된다.

### 단점 
- 처음에 속도가 느리다.
- 서버 통신을 비동기로 하기때문에 처음엔 속도가 느리지만 그 이후에는 전통적인 MPA방식보다 월등히 빠르다.
- MPA방식과 다르게 프론트서버도 따로두어야 하기때문에 두가지 서버를 관리해야한다.

### 유의사항
- SPA 방식에 맞는 애플리케이션이있고 , MPA방식에 맞는 애플리케이션이 있다.

- 쇼핑몰과 같이 다양한 컨텐츠를 보여주어야한다면 MPA방식이 좀 더 어울릴것이다.

- SPA + MPA방식을 이용하는 하이브리드 방식도 존재한다.


##### STEP 1
- 프론트서버 구축하기 
- 프론트 서버는 node기반의 webpack을 사용하는것이 간단하다.
    1. node js 설치하기
        - https://nodejs.org/ko/download/
        - CommandLine > node --version 으로 노드버전확인 
        - 버전이 정상적으로 나온다면 설치가 완료된 것이다.
    
    2. npm 설치 확인
        - npm 은 node 와 프론트진영의 maven같은 저장소이다.
        - 일반적으로 nodejs 설치시 같이설치된다.
        - CommandLine > npm --version 으로 npm 설치 확인
        - 버전이 정상적으로 나온다면 설치가 완료된 것이다.
    
    3. vue 설치
        - npm - install -g vue-cli 
        - npm 저장소에서 vue-cli를 설치한다.
        - 설치후 CommandLine > vue --version 으로 vue버전확인
        - 버전이 정상적으로 나온다면 설치가 완료된 것이다.
    
    4. vue 프로젝트 생성
        - vue init 'template-name' 'project-name'
        - vue cli에서는 미리 세팅된 템플릿을 제공한다 
        - vue list 명령어를 통해 제공 템플릿 리스트를 확인가능하다.
        - vue init webpack demo-vue
        - 각종 세팅후 프로젝트가 생성된다.
    
    5. npm 패키지 설치하기
        - vue 프로젝트가 생성이 되었다면 해당 패키지 프로젝트로 이동하여 npm 패키지를 설치해주어야한다.
        - cd 'project-name' 으로 해당프로젝트로 이동한다.
        - cd demo-vue
        - 프로젝트 이동후 npm-install 명령어를 통해 npm패키지를 설치해준다.

    6. 서버 실행하기
        - npm run dev 명령어로 서버를 실행한다.
        - 컴파일 과정을 거치고 로컬 페이지를 실행해준다. 
        - 코드 수정후 저장하면 hot-reload가 동작된다. (변경상태 반영)
        - 실행후 localhost:8080/ 로 접근하면 샘플페이지가 나오며 프론트 서버 구동에 성공한것이다.


##### STEP 2
- 백엔드 서버 구축하기
- 백엔드 서버는 Spring Boot or NodeJS를 사용하는것이 간단하다.
    - 백엔드 이하 생략 ..

##### STEP 3 
- 백엔드 + 프론트 연동(?) 이라하기엔 애매하다.
1. 패키지 방식
    - 패키지 방식은 주로 backend , frontend 로 각각 두는것이 일반적이며 두가지방식이 존재함.
```
frontend
    ㄴ build
    ㄴ config
    ㄴ node-modules ...
backend
    ㄴ src
        ㄴ main
            ㄴ java ...
```
```
demo-spring-boot-vue
    ㄴ demo-vue
        ㄴ build
        ㄴ config
        ㄴ node-modules ...
    ㄴ src
        ㄴ main
            ㄴ java ...
```

- 아래의 방법으로 진행하도록 하겠음.
- 앞서 빌드한 vue프로젝트를 src와 동 루트의 패키지로 이동한다.
- 패키지 구조는 아래와 같은 상태가 될 것이다.
```
demo-spring-boot-vue
    ㄴ demo-vue
    ㄴ src
        ㄴ main
            ㄴ java
```

2. Webpack 빌드시 생성되는 index.html파일을 스프링부트의 resources 디렉토리에 위치할 수 있도록 config수정
- /demo-vue/config/index.js
```
 build: {
    // Template for index.html
    index: path.resolve(__dirname, '../../src/main/resources/static/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../src/main/resources/static'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

```

##### STEP4 
- 배포하기 
    - npm run dev 명령어로 서버가 실행되는지 확인한다.
    - package.json 이 없어서 실행이 되지않는다면 npm install 명령어 실행후 다시실행.
    - dev모드로 실행이 되는지 확인후 npm run build 로 빌드한다.
    - 빌드완료후 spring boot 서버를 구동
    - localhost:8080 으로 접근하여 vue의 index페이지로 와진다면 성공한것이다.
    - spring boot 서버하나로 vue 프론트와 , api 백서버를 운용 
    - dev모드로 개발하는것처럼 배포시에도 프론트,백서버를 분리하여 가능함.
