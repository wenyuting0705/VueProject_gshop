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
  mounted(){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUser')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
