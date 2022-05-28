<script setup>
import { computed } from 'vue'
import pokeballImage from '@/assets/images/pokeball.png'

const props = defineProps({
  color: {
    type: String,
    default: 'dark'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: null
  },
  to: {
    type: [Object, String],
    default: '#'
  }
})

const componentClass = computed(() => {
  let base = ''
  switch (props.color) {
    case 'danger':
      base = 'bg-orange-700'
      break
    case 'info':
      base = 'bg-blue-600'
      break
    case 'primary':
      base = 'bg-violet-900'
      break
    case 'success':
      base = 'bg-teal-700'
      break
    case 'warning':
      base = 'bg-yellow-500'
      break
    default:
      return 'bg-slate-900'
  }
  return base
})
</script>

<template>
  <router-link :to="to">
    <div
      class="relative flex flex-wrap h-24 p-4 overflow-hidden rounded-2xl"
      :class="[componentClass, { 'cursor-default': disabled, 'hover:opacity-75': !disabled }]"
    >
      <div
        class="absolute w-32 h-32 overflow-hidden bg-no-repeat bg-contain -left-20 -top-20 opacity-20"
        :style="{ backgroundImage: `url(${pokeballImage})` }"
      />

      <div class="flex flex-wrap items-center justify-between text-xl font-bold text-white">
        {{ label }}
      </div>

      <div
        class="absolute w-32 h-32 overflow-hidden bg-no-repeat bg-contain left-3/4 -top-4 opacity-20"
        :style="{ backgroundImage: `url(${pokeballImage})` }"
      />
    </div>
  </router-link>
</template>
