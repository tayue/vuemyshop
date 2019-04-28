import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/Layout'
import Login from '@/views/login/index'
import Redirect from '@/views/redirect/index'
import AutoRedirect from '@/views/login/authredirect'
Vue.use(Router)

export default new Router({
  routes: [
     {
          path: '/',

          name: 'Login',
          component: Login,
      },

      {
          path: '/hello',

          name: 'HelloWorld',
          component: HelloWorld,
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
          component: AutoRedirect,

      }
  ]
})
