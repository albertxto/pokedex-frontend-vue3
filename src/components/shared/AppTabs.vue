<script setup>
import { ref } from 'vue'

defineProps({
  tabs: {
    type: Array,
    default () {
      return []
    }
  }
})

const indexActive = ref(0)

const emit = defineEmits(['change'])

const changeSelected = (event, index, value) => {
  event.preventDefault() // Prevent scroll to top when clicking tab
  indexActive.value = index
  emit('change', value)
}

const componentClass = (index) => {
  const base = [
    indexActive.value === index
      ? 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
      : 'text-slate-500 border-transparent hover:text-slate-600 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300'
  ]
  return base
}
</script>

<template>
  <ul class="flex flex-wrap gap-3 justify-evenly">
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      @click="(event) => changeSelected(event, index, tab.value)"
    >
      <a
        href="#"
        class="inline-block p-2 font-medium text-center border-b-2 rounded-t-lg sm:p-4"
        :class="componentClass(index)"
      >
        {{ tab.label }}
      </a>
    </li>
  </ul>
</template>
