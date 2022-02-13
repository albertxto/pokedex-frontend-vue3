<script setup>
import { computed } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
})

const componentClass = computed(() => {
  const base = [
    props.active
      ? 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
      : 'text-slate-500 border-transparent hover:text-slate-600 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300'
  ]
  return base
})
</script>

<template>
  <li class="mr-2">
    <a
      href="#"
      class="inline-block px-4 py-4 text-sm font-medium text-center border-b-2 rounded-t-lg"
      :class="componentClass"
    >
      {{ label }}
    </a>
  </li>
</template>
