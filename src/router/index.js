import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/containers/index'
import HealthMall from '@/components/containers/health-mall'
import SocialSecurityQuery from '@/components/containers/social-security-query'
import SocialSecurityPlaceQuery from'@/components/containers/social-security-place-query'

import Capacity from '@/components/containers/capacity'
import Expense from '@/components/containers/expense'
import DrugShop from '@/components/containers/drugShop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: "/health-mall",
      component: HealthMall
    },
    {
      path: "/social-security-query",
      component: SocialSecurityQuery
    },
    {
      path: "/social-security-place-query",
      component: SocialSecurityPlaceQuery
    },
    {
      path: '/capacity',
      name: 'capacity',
      component: Capacity
    },
    {
      path: '/expense',
      name: 'expense',
      component: Expense
    },
    {
      path: '/drugShop',
      name: 'drugShop',
      component: DrugShop
    },
  ]
})
