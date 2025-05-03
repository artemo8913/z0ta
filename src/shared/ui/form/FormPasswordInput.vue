<script setup lang="ts">
import { computed, ref } from 'vue'

import { IconEyeOn, IconEyeOff } from '@/shared/ui/icons'

import FormInput, { type FormInputProps } from './FormInput.vue'

defineProps<Omit<FormInputProps, 'type'>>()

const value = defineModel({ default: '' })

const isShow = ref(false)

const inputType = computed(() => (isShow.value ? 'text' : 'password'))

const toggle = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="passwordContainer">
    <FormInput v-model="value" v-bind="$props" :type="inputType">
      <template #icons>
        <IconEyeOn v-if="isShow" @click="toggle" />
        <IconEyeOff v-if="!isShow" @click="toggle" />
      </template>
    </FormInput>
  </div>
</template>

<style scoped>
.passwordContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
