# vue-kakao-pf 👋

> 카카오 플러스친구 1:1 채팅 버튼을 생성해주는 Vue.js 플러그인 입니다.

[![Gzipsize](https://img.badgesize.io/spemer/vue-kakao-pf/master/src/vue-kakao-pf.js?compression=gzip)](https://www.npmjs.com/package/vue-kakao-pf)
[![Version](https://img.shields.io/npm/v/vue-kakao-pf.svg)](https://www.npmjs.com/package/vue-kakao-pf)
[![License](https://img.shields.io/npm/l/vue-kakao-pf.svg)](https://github.com/spemer/vue-kakao-pf)

[Live Demo](https://spemer.github.io/vue-kakao-pf/)

## ✔ 설치

``` bash
npm i vue-kakao-pf --save
```

``` bash
yarn add vue-kakao-pf
```

### CDNs

[jsDelivr](https://cdn.jsdelivr.net/npm/vue-kakao-pf/),
[UNPKG](https://unpkg.com/vue-kakao-pf/),
[bundle.run](https://bundle.run/vue-kakao-pf)

## ✔ 사용

### index.html

``` html
<!-- index.html -->
<script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
```

### main.js

``` javascript
// main.js
import Vue from 'vue'
import VueKakaoPf from 'vue-kakao-pf'

// 플러스친구 홈 URL의 id를 입력해주세요
VueKakaoPf.plusFriendId = '_id'
// 앱의 키(JavaScript)를 입력해주세요 (아직 초기화가 되어있지 않은 경우에만)
Kakao.init(process.env.KAKAO_KEY)

Vue.use(VueKakaoPf)
```

### CSS(선택)

``` css
/* style.css */
#plusfriend-addfriend-button img {
  /* ... */
}
```

## ✔ Author

[Hyouk Seo(Spemer)](https://github.com/spemer)
