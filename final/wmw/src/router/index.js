import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Block from '../views/Block.vue'
import Clay from '../views/Clay.vue'
import Kolrosing from '../views/Kolrosing.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/block',
      name: 'block',
      component: Block
    },
    {
      path: '/clay',
      name: 'clay',
      component: Clay
    },
    {
      path: '/kolrosing',
      name: 'kolrosing',
      component: Kolrosing
    }
  ]
})

export default router
