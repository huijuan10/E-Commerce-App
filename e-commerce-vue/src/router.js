import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './views/home.vue'
import Find from './views/find.vue'
import Mall from './views/mall.vue'
import Me from './views/me.vue'
import Funs from './components/me/funs.vue'
import Comment from './components/me/comment.vue'
import SystemNotification from './components/me/systemNotification.vue'
import ThumbsUp from './components/me/thumbsUp.vue'
const router = new Router({
  mode: 'history',  
  routes: [
    {
        path: '/',
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
    {
        path: '/me/funs',
        component: Funs
    },
    {
        path: '/me/comment',
        component: Comment
    },
    {
        path: '/me/systemNotification',
        component: SystemNotification
    },
    {
        path: '/me/thumbsUp',
        component: ThumbsUp
    },
  ]
})

export default router
