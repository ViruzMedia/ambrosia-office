import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/index.js'
import Dashboard from '@/components/office/dashboard.component'
import Login from '@/components/account_system/login.component'
import Register from '@/components/account_system/register.component'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/account-system/login',
      name: 'login',
      component: Login
    },
    {
      path: '/account-system/register',
      name: 'register',
      component: Register
    }
  ]
})
