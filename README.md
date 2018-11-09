# 프로젝트

## [던파인 (웹사이트)](https://dunfa.in/)

### 설명

던전앤파이터 API 를 통해 PHP7 에서 WebSocket 을 통해 실시간 아이템 가격을 받아와 표기해주는 사이트입니다.

SASS 를 사용하여 반응형 사이트로 제작하였으며 디바이스 크기에 반응하는 반응형 웹사이트로 제작하였습니다.

서버의 연산량과 트래픽을 최소화 하기 위해 접속중인 사용자들에게 표시되는 아이템 목록을 hashmap 형태로 수집하여 중복값을 제외한 목록을
마지막으로 검색한 뒤 일정시간이 지난 아이템만 API 를 통해 호출하고 RedisDB 에 값을 저장하는 방식으로 서버의 응답속도을 낮췄습니다.

현재에도 운영중에 있으며 월간 페이지 뷰 30 만을 달성했습니다.

### 사용 언어

- back-end : PHP7
- front-end : SASS, jQuery, axios, WebSocket
- dataBase : Mysql, Redis

---

## [dnf-api (node.js)](https://www.npmjs.com/package/dnf-api)

네오플에서 제공하는 API 를 node.js 상에서 좀 더 사용하기 쉽게 모듈화 하여 NPM 에 패키지를 배포했습니다.

ES6 문법의 async/await 을 통한 비동기 처리가 가능하게 설계하였습니다.

### 사용 언어

- tool : node.js, neopleAPI
- langauge : javascript(es6)

---

## [트게더 테마 (SASS)](https://github.com/k22pr/Tgd-Theme)

SASS 언어를 통해 다양한 각기 다른 매력을 가진 방송인들의 개성을 살려 디자인했습니다.

### 사용 언어

- lanauge : sass ,css

---

## [Twitch-chat-bot (node.js & typescript)](https://github.com/k22pr/Twitch-chatbot)

트위치 API 를 통해 별도의 페이지가 아니라 채팅창에서 채팅을 관리할 수 있게 제작한 도구 입니다.

Typescript 를 통해 각 채널 별로 나누어 객체화 하였으며 ES6 의 async / await 문법을 통해 비동기로 접근할 수 있게 하였습니다.

### 사용 언어

- tool : node.js, tmi.js
- langauge : typescirpt

---

## Twitch-clip-bot (node.js & typescript)

봇을 통해 방송도중 재미있는 부분이 나오면 해당부분을 자동으로 30 초 가량의 클립으로 제작해주는 봇을 제작하였습니다.

다중 체널에서 동시에 감시하고 있을 수 있으며 현재 Vue.js 를 통해 모아 볼 수 있는 front-end 페이지를 제작 중 입니다.

### 사용 언어

- front-end : Vue.js, Websocket
- back-end : node.js, twitch-api

---

## 마루마루클리너 (크롬 확장프로그램)

불법 만화사이트인 마루마루의 광고를 지워줍니다. 사이트에서 응답하는 모든 script type 를 차단하고 페이지를 재구성 하여 보여줍니다.

현재 크롬 웹 스토어에 배포중이며 8000 명이 사용 중입니다.

### 사용 언어

- html, css, javascript
