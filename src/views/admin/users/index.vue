<script setup>
import { defineAsyncComponent } from 'vue'

const UserList = defineAsyncComponent(() => import('@/components/admin/users/index.vue'))
</script>

<template>
  <UserList />
</template>
