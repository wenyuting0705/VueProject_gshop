<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqAddress} from './api'
export default {
  components:{
    FooterGuide
  },
//  async mounted () {
//    const result = await reqAddress('30.20038,116.36867')
//    console.log(result)
//  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
