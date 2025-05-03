<script setup lang="ts">
import { computed } from 'vue'

import { IconClose } from '@/shared/ui/icons'

export interface FormInputProps {
  name: string
  label: string
  errorText?: string
  isTouched?: boolean
  isRequired?: boolean
}

const props = defineProps<FormInputProps>()
const model = defineModel<string>({ default: '' })
const emit = defineEmits(['update:modelValue'])

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  model.value = target.value
  emit('update:modelValue', target.value)
}

const hasError = computed(() => Boolean(props.errorText))

const clearInput = () => {
  model.value = ''
}
</script>

<template>
  <div class="inputContainer">
    <label :for="name"> {{ label }}<span v-if="isRequired">*</span> </label>
    <div class="inputWrapper">
      <input
        v-bind="$attrs"
        v-model="model"
        :id="name"
        :name="name"
        :required="isRequired"
        :class="{ errorText: hasError }"
        @input="handleInput"
      />
      <div class="icon">
        <slot name="icons"></slot>
        <IconClose v-if="hasError && model" :class="{ errorText: hasError }" @click="clearInput" />
      </div>
    </div>
    <div v-if="isRequired && isTouched && !model" class="errorText">Поле обязательно для ввода</div>
    <div v-if="hasError" class="errorText">
      {{ props.errorText }}
    </div>
  </div>
</template>

<style scoped>
.inputContainer {
  width: 100%;
}

label {
  font-size: 14px;
}

.inputWrapper {
  position: relative;
}

input {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color-border);
}

input:focus {
  border-color: var(--color-border);
}

input[invalid='true'] {
  border-color: var(--color-error);
  padding-right: 2.5rem;
}

.icon {
  top: 50%;
  right: 0;
  display: flex;
  cursor: pointer;
  position: absolute;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
  color: var(--color-error);
  transform: translateY(-50%);
}

.errorText {
  font-size: 14px;
  color: var(--color-error);
  fill: var(--color-error);
}
div.errorText {
  margin-top: 4px;
}
</style>
