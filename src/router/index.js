import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/Layout'
import Login from '@/views/login/index'
import Redirect from '@/views/redirect/index'
import AutoRedirect from '@/views/login/authredirect'
import Dashboard from '@/views/dashboard/index'
Vue.use(Router)

var routes = [
  {
    path: '/login',
    component: Login
  },

  {
    path: '/hello',

    component: HelloWorld
  },

  {
    path: '/redirect',
    component: Layout,

    children: [
      {
        path: '/redirect/:path*',
        component: Redirect
      }
    ]
  },
  {
    path: '/auth-redirect',
    component: AutoRedirect
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: Dashboard,

        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

// 将路径注入到Router中
var router = new Router({
  'mode': 'history',
  routes
})
// 导出路由
export default router
