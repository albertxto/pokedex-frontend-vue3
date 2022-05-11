<script setup>
import { defineAsyncComponent } from 'vue'

const UserEdit = defineAsyncComponent(() => import('@/components/admin/users/edit/index.vue'))
</script>

<template>
  <UserEdit />
</template>
