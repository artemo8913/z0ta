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

    <a @click="logout">Выйти</a>
  </main>
</template>
