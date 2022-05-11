<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },
  value: {
    type: Number,
    default: 0
  }
})

const componentClass = computed(() => {
  let size = ''
  switch (props.size) {
    case 'sm':
      size = 'h-1'
      break
    default:
      size = 'h-2'
  }
  const base = [
    size
  ]
  return base
})
</script>

<template>
  <div class="relative">
    <div
      class="flex overflow-hidden text-xs rounded"
      :class="[componentClass, { 'bg-green-200': value >= 39, 'bg-red-200': value < 39 }]"
    >
      <div
        class="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap"
        :class="{ 'bg-green-500': value >= 39, 'bg-red-500': value < 39 }"
        :style="{ width: `${value}%` }"
      />
    </div>
  </div>
</template>
