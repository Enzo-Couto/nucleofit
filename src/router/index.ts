import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../landingpage/LandingPage.vue'
import LoginPage from '../auth/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    }
  ],
})

export default router