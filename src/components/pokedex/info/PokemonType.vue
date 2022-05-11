<script setup>
defineProps({
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="px-4 py-1 text-xs font-bold capitalize bg-white bg-opacity-25 rounded-full sm:text-sm">
    {{ value }}
  </div>
</template>
