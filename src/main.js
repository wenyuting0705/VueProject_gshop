
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import HeaderTop from './components/HeaderTop/HeaderTop.vue'

import './mock/mockServer'
import './filter'

import loading from './common/imgs/loading.gif'

Vue.component('HeaderTop',HeaderTop)
Vue.component(Button.name,Button)

Vue.use(VueLazyload,{
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
