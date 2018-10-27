import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home'
import Spider from '../pages/spider/spider'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Spider',
      name: 'Spider',
      component: Spider
    }
  ]
})

