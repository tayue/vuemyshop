import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/Layout'
import Login from '@/views/login/index'
import Redirect from '@/views/redirect/index'
import AutoRedirect from '@/views/login/authredirect'
import Dashboard from '@/views/dashboard/index'
import UserManager from '@/views/user/user'
import UserAddress from '@/views/user/address'
Vue.use(Router)

export const routes = [
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
export const asyncRouterMap=[
  {
    path: '/user',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'userManage',
    meta: {
      title: '用户管理',
      icon: 'chart'
    },
    children: [
      {
        path: 'user',
        component: UserManager,
        name: 'user',
        meta: {
          perms: ['GET /api/user/list', 'POST /api/user/create', 'POST /api/user/update', 'POST /api/user/delete'],
          title: '会员管理',
          noCache: true
        }
      },
      {
        path: 'address',
        component: UserAddress,
        name: 'address',
        meta: {
          perms: ['GET /api/address/list'],
          title: '收货地址',
          noCache: true
        }
      }
    ]
  }
]
export const constantRouterMap=[]

// 将路径注入到Router中
var router = new Router({
  'mode': 'history',
  routes
})
// 导出路由
export default router
