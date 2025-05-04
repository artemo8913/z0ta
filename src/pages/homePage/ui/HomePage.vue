<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { REGISTER_ROUTE } from '@/shared/routes'
import { useUserStore } from '@/entities/user'

const userStore = useUserStore()
const router = useRouter()

const user = computed(() => userStore.user)

const logout = () => {
  userStore.clearUser()
  router.push(REGISTER_ROUTE.path)
}
</script>

<template>
  <main class="page">
    <h1>Здравствуйте, {{ user?.login }}</h1>
    <a @click="logout">Выход</a>
  </main>
</template>

<style scoped>
h1 {
  padding-bottom: 40px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--color-gray-light);
}
a {
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip-ink: none;
}
</style>
