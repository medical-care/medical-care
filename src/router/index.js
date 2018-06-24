import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/containers/index'
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
