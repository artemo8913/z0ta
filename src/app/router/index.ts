import { createRouter, createWebHistory } from 'vue-router'

import { HOME_ROUTE, REGISTER_ROUTE } from '@/shared/routes'
import { useUserStore } from '@/entities/user'
import HomePage from '@/pages/homePage'
import RegisterPage from '@/pages/registerPage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...HOME_ROUTE,
      component: HomePage,
    },
    {
      ...REGISTER_ROUTE,
      component: RegisterPage,
    },
  ],
})

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()

  if (!userStore.user?.login && to.fullPath !== REGISTER_ROUTE.path) {
    next(REGISTER_ROUTE.path)
  } else {
    next()
  }
})

export default router
