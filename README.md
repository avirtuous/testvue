# testvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Vue 2 / Vue 3 차이점

main.js에 대한 Vue 2 vs Vue 3 버전 차이

Vue 2 프로젝트의 main.js 파일

import Vue from 'vue'
import App from './App.vue'

new Vue({
render: h => h(App),
}).$mount('#app')
Vue 3 프로젝트의 main.js 파일

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
Vue 생성자(new Vue)에서 createApp() 메서드 사용으로 변경되어서 동일한 파일에서 여러 개의 Vue Instance 생성될 때 공통으로 사용되던 부분(Vue.use(), Vue.component())이 없어져 효율적인 Vue Instance 생성이 가능해졌습니다.

### 폴더구조 

testvue : Vue 프로젝트 폴더
+- node_modules : Node 모듈 폴더
+- public : 이미지 파일이나 CSS 파일, JavaScript 파일등과 같은 정적 파일들이 있는 폴더
+- favicon.ico : 아이콘 파일(파비콘)
+- index.html : 레이아웃 웹 페이지 파일 (html-webpack-plugin으로 처리될 템플릿)
+- src : 소스 폴더
+- assets : 이미지 파일이나 CSS 파일, JavaScript 파일등과 같은 정적 파일들이 있는 폴더
(build로 배포 버전을 만들 때 public과 함께 배포)
+- logo.png : 로고 이미지 파일
+- components : Vue 컴포넌트 폴더
+- HelloWorld.vue : HelloWorld 컴포넌트 파일
+- App.vue : 애플리케이션 컴포넌트 파일
+- main.js : entry point 파일 (Vue 생성 - 제일 먼저 실행)

### vue : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\Lemon_Plus\AppData\Roaming\npm\vue.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오.

관리자 권한으로 cmd 실행
(실행규칙 변경 필요)
Set-ExecutionPolicy -ExecutionPolicy Unrestricted

Y


### export의 구조 이해

name : 상위 컴포넌트에서 사용할 수 있게 이름을 설정합니다. (필수는 아닙니다.)

components : 컴포넌트에서 사용하고 있는 컴포넌트들을 설정한다.

props : 상위 컴포넌트로부터 데이터를 전달받을 수 있게 이름과 타입을 설정합니다.

setup : 컴포넌트에서 사용할 데이터들은 state로 설정하고 메서드들을 설정한다. (Vue 2에서 사용되는 data, method가 setup으로 변경) - Vue 3

data : 컴포넌트에서 사용할 데이터들을 설정한다. - Vue 2

method : 컴포넌트에서 사용할 메서드를 설정한다. - Vue 2

computed : 컴포넌트에서 data들이 변화면 자동 처리되는 메서드를 설정한다. - Vue 2


### 데이터 간접적인 바인딩을 사용 (Props)
```
data(){
    return {
      price1 : 60
    }
  }
```

와 같이 데이터 바인딩을 하지않고, 

```jsx
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
```

와 같이 component에 직접 msg를 입력하여, data 바인딩되지 않은 컴퍼넌트 내에서 

propws를 통한 간접 데이터 바인딩이 가능하다.

HelloWorld.vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
...이하 생략
