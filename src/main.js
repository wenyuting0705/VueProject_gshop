
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import HeaderTop from './components/HeaderTop/HeaderTop.vue'

Vue.component('HeaderTop',HeaderTop)
Vue.component(Button.name,Button)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
