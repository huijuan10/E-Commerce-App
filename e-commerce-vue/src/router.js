import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './components/views/home.vue'
import Find from './components/views/find.vue'
import Mall from './components/views/mall.vue'
import Me from './components/views/me.vue'
const router = new Router({
  mode: 'history',  
  routes: [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/find',
        component: Find
    },
    {
        path: '/mall',
        component: Mall
    },
    {
        path: '/me',
        component: Me
    },
  ]
})

export default router
