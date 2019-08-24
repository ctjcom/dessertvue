import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MenuTotal from './views/MenuTotal.vue'
import MenuList from './views/MenuList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/MenuTotal/:mid',
      name: 'MenuTotal',
      component: MenuTotal
    },
    {
      path: '/MenuList/:type',
      name: 'MenuList',
      component: MenuList
    }
  ]
})
