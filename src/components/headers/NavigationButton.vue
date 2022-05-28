<script setup>
defineProps({
  color: {
    type: String,
    default: 'text-white'
  },
  to: {
    type: [Object, String],
    default: null
  }
})
</script>

<template>
  <router-link
    class="flex items-center py-2 text-xs font-bold uppercase hover:text-slate-400"
    :class="[color]"
    :to="to"
  >
    <slot />
  </router-link>
</template>
