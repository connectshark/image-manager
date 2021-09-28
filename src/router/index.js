import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/add.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router