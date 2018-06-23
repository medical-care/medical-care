import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/containers/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
