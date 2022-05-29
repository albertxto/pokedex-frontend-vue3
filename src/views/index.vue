<script setup>
import { defineAsyncComponent } from 'vue'

const AppFooter = defineAsyncComponent(() => import('@/components/footer/AppFooter.vue'))
const HomePage = defineAsyncComponent(() => import('@/components/home/index.vue'))
</script>

<template>
  <HomePage />
  <AppFooter absolute />
</template>
