<script setup>
import { computed } from 'vue'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'
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
  loading: {
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

const isDisabled = computed(() => props.disabled || props.loading)

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
    getButtonColor(props.color, props.outline, !isDisabled.value)
  ]
  if (isDisabled.value) {
    base.push('hover:cursor-not-allowed', props.outline ? 'opacity-50' : 'opacity-70')
  }
  return base
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center font-bold uppercase transition-colors duration-150 border rounded cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="componentClass"
    :disabled="isDisabled"
    :type="type"
  >
    <ArrowPathIcon
      v-if="loading"
      class="w-4 h-4 animate-spin"
    />
    <slot v-else />
  </button>
</template>
