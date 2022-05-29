<script setup>
defineProps({
  type: {
    type: String,
    default: 'rounded'
  }
})
</script>

<template>
  <div
    class="animate-pulse bg-slate-700"
    :class="type"
  />
</template>
