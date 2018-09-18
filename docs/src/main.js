import Vue from 'vue'
import App from './App.vue'
import VueKakaoPf from '../../src/vue-kakao-pf'

VueKakaoPf.plusFriendId = '_jmtVj'
Kakao.init(process.env.KAKAO_KEY)
Vue.use(VueKakaoPf)

new Vue({
  el: '#app',
  render: h => h(App)
})
