<script setup>
import { defineAsyncComponent, onMounted } from 'vue'

const HomePage = defineAsyncComponent(() => import('@/components/home/index.vue'))

onMounted(() => {
  document.title = 'Pokédex'
})
</script>

<template>
  <HomePage />
</template>
