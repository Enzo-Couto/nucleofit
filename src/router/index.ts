import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../landingpage/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
    },
  ],
})

export default router