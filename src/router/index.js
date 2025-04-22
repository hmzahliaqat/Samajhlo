import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import GuestLayout from '@/views/layouts/GuestLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GuestLayout,
      children: [],
    },

    {
      path: '/auth',
      component: AuthLayout,
      children: [],
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
