<script setup>
import { defineAsyncComponent } from 'vue'

const Dashboard = defineAsyncComponent(() => import('@/components/admin/dashboard/index.vue'))
</script>

<template>
  <Dashboard />
</template>
