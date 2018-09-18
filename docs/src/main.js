import Vue from 'vue'
import App from './App.vue'
import VueKakaoPf from '../../src/vue-kakao-pf'

Vue.use(VueKakaoPf)
VueKakaoPf.plusFriendId = '_jmtVj'
Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  render: h => h(App)
})
