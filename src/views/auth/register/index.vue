<script setup>
import { defineAsyncComponent } from 'vue'

const Register = defineAsyncComponent(() => import('@/components/auth/register/index.vue'))
</script>

<template>
  <Register />
</template>
