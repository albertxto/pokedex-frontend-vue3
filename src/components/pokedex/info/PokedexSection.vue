<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="text-base font-bold sm:text-lg">
      {{ label }}
    </div>

    <div class="flex flex-col gap-3">
      <slot />
    </div>
  </div>
</template>
