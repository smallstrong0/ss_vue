import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import Spider from '../pages/spider/spider.vue'
import Android from '../pages/android/android.vue'

Vue.use(Router)

const route = new Router({
  routes:[
    {
      path: '*',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Spider',
      name: 'Spider',
      component: Spider
    },
    {
      path: '/Android',
      name: 'Android',
      component: Android
    },
  ]
});

export default route 