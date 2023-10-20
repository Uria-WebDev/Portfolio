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
    },

    {
      path: '/CV',
      component: () => import('../views/CvView.vue')
    },

    {
      path: '/Cahier-des-charges-1',
      component: () => import('../views/CahierView1.vue')
    },

    {
      path: '/Cahier-des-charges-2',
      component: () => import('../views/CahierView2.vue')
    },

    {
      path: '/Cahier-des-charges-3',
      component: () => import('../views/CahierView3.vue')
    },

    {
      path: '/Espace-commentaire-1',
      component: () => import('../views/EcView1.vue')
    },

    {
      path: '/Espace-commentaire-2',
      component: () => import('../views/EcView2.vue')
    },

    {
      path: '/Espace-commentaire-3',
      component: () => import('../views/EcView3.vue')
    }
  ]
})

export default router
