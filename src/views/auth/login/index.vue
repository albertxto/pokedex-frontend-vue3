<script setup>
import { defineAsyncComponent } from 'vue'

const Login = defineAsyncComponent(() => import('@/components/auth/login/index.vue'))
</script>

<template>
  <Login />
</template>
