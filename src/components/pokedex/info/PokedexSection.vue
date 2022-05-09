<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'sm'
  }
})

const componentClass = computed(() => {
  let size = ''
  switch (props.size) {
    case 'md':
      size = 'gap-6'
      break
    default:
      size = 'gap-3'
  }
  return size
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="text-base font-bold sm:text-lg">
      {{ label }}
    </div>

    <div
      class="flex flex-col"
      :class="componentClass"
    >
      <slot />
    </div>
  </div>
</template>
