<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex flex-wrap">
    <div class="w-4/12 capitalize text-slate-400 sm:w-3/12">
      {{ label }}
    </div>

    <div class="w-8/12 sm:w-9/12">
      <slot />
    </div>
  </div>
</template>
