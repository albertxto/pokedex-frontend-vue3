<script setup>
defineProps({
  forceWhite: {
    type: Boolean,
    default: false
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
    :class="{ 'text-white': forceWhite }"
    :to="to"
  >
    <slot />
  </router-link>
</template>
