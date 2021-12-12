<template>
  <div id="MainPage">
    <img alt="Vue logo" src="./assets/logo.png" onclick="alert('Hello Vue!');">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--<button type="button"><router-link tag="a" :to="'/Board'">게시판</router-link></button>-->

  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'MainPage',
  components: {
    HelloWorld
  }
  // , data() {
  //   return {
  //     routePath: '/Board'
  //   }
  // }
}
</script>

<style>
  #MainPage {
    text-align: center;
  }
</style>
