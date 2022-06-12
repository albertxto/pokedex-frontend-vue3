<script setup>
import { defineAsyncComponent } from 'vue'

const HomePage = defineAsyncComponent(() => import('@/components/home/index.vue'))
</script>

<template>
  <HomePage />
</template>
