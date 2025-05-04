<script setup lang="ts">
defineProps(['label'])
</script>

<template>
  <button v-bind="$attrs" type="submit"><slot /></button>
</template>

<style lang="css" scoped>
button {
  border: none;
  height: 50px;
  cursor: pointer;
  margin-top: 12px;
  border-radius: 2px;
  transition: background-color 0.1s linear;
  color: var(--color-text-light);
  background-color: var(--color-gray-dark);
}

button:hover {
  background-color: var(--color-gray);
}
</style>
