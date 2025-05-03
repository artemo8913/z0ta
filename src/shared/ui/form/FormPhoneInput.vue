<script setup lang="ts">
import FormInput, { type FormInputProps } from './FormInput.vue'

const props = defineProps<Omit<FormInputProps, 'type'>>()

const phoneNumber = defineModel({ default: '' })

const formatPhone = (newValue: string) => {
  if (!newValue || newValue === '+') {
    return newValue
  }

  const numbers = newValue.startsWith('+7')
    ? newValue.replace(/\D/g, '').slice(0, 11) // 7 + 10 цифр
    : '7' + newValue.replace(/\D/g, '').slice(0, 11)

  let result = '+7'

  if (numbers.length > 1) {
    const rest = numbers.slice(1)
    result += rest.length > 0 ? ` (${rest.slice(0, 3)}` : ''
    result += rest.length > 3 ? `) ${rest.slice(3, 6)}` : ''
    result += rest.length > 6 ? `-${rest.slice(6, 8)}` : ''
    result += rest.length > 8 ? `-${rest.slice(8, 10)}` : ''
  }

  return result
}

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const newValue = formatPhone(target.value)
  phoneNumber.value = newValue
  target.value = newValue
}
</script>

<template>
  <FormInput
    v-bind="props"
    v-model="phoneNumber"
    @input="handleInput"
    type="tel"
    placeholder="+7 (XXX) XXX-XX-XX"
  />
</template>
