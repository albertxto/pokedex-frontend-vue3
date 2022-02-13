<script setup>
import { computed } from 'vue'
import { getButtonColor } from '@/config/colors'

const props = defineProps({
  color: {
    type: String,
    default: 'white'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  type: {
    type: String,
    default: 'button'
  }
})

const componentClass = computed(() => {
  let size = ''
  switch (props.size) {
    case 'sm':
      size = 'px-4 py-2 text-xs'
      break
    case 'xs':
      size = 'px-2 py-1 text-xs'
      break
    default:
      size = 'px-6 py-3 text-sm'
  }
  const base = [
    size,
    getButtonColor(props.color, props.outline, !props.disabled)
  ]
  if (props.disabled) {
    base.push('hover:cursor-not-allowed', props.outline ? 'opacity-50' : 'opacity-70')
  }
  return base
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center font-bold uppercase transition-colors duration-150 border rounded cursor-pointer whitespace-nowrap focus:outline-none focus:ring-1"
    :class="componentClass"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>
