<script setup>
import { onMounted, ref } from 'vue'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

const emits = defineEmits(['intersect'])

const intersectRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        emits('intersect')
      }
    })
  })

  observer.observe(intersectRef.value)
})
</script>

<template>
  <div class="flex justify-center">
    <ArrowPathIcon
      ref="intersectRef"
      class="w-10 h-10 animate-spin-fast"
    />
  </div>
</template>
