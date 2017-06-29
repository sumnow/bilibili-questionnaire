import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Item from '@/components/item'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/item/',
      name: 'item',
      component: Item
    }
  ]
})
