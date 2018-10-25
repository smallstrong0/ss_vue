import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home'
import Spider from '../pages/spider/spider'
import Android from '../pages/android/android'

Vue.use(Router)

const route = new Router({
    mode:'history',  //使用history防止url中出现#
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
        },
        {
            path: '/Android',
            name: 'Android',
            component: Android
        },
    ]
});

export default route 