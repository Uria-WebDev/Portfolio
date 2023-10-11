import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },

    { 
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },

    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

export default router
