import Vue from 'vue'
import {App, Board, MainPage} from './'

import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
      path: '/'
      , component: App
  }
  , {
    path: '/Board'
    , component: Board
  }
  , {
    path: '/MainPage'
    , component: MainPage
  }
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
