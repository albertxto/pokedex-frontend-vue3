<script setup>
import { defineAsyncComponent } from 'vue'

const UserAdd = defineAsyncComponent(() => import('@/components/admin/users/add/index.vue'))
</script>

<template>
  <UserAdd />
</template>
