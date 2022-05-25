<script setup>
import { defineAsyncComponent } from 'vue'

const UserProfile = defineAsyncComponent(() => import('@/components/admin/profile/index.vue'))
</script>

<template>
  <UserProfile />
</template>
