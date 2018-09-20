import 'babel-polyfill'
import 'event-source-polyfill'

import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import Toasted from 'vue-toasted'
import VueRippler from 'vue-rippler'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'
import VueKakaoPf from '../../src/vue-kakao-pf'

Vue.use(Toasted)
Vue.use(VTooltip)
Vue.use(VueRippler)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)

VueKakaoPf.plusFriendId = '_jmtVj'
Kakao.init(process.env.KAKAO_KEY)
Vue.use(VueKakaoPf)

new Vue({
  el: '#app',
  render: h => h(App)
})
