import Vue from 'vue'
import VueRouter from 'vue-router'
import {App, Board, MainPage, SignUp} from './'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/Board'
    , component: Board
  }
  , {
    path: '/MainPage'
    , component: MainPage
  }
  , {
    path: '/SignUp'
    , component: SignUp
  }
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
