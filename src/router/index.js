import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('../views/BookList.vue')
    },
    {
      path: '/detail/:id',
      name: 'book-detail',
      component: () => import('../views/BookDetail.vue')
    }
  ]
})

export default router
