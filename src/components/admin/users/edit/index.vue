<script setup>
import { defineAsyncComponent } from 'vue'

const ChangePassword = defineAsyncComponent(() => import('@/components/admin/users/edit/ChangePassword.vue'))
const EditProfile = defineAsyncComponent(() => import('@/components/admin/users/edit/EditProfile.vue'))
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <EditProfile />

    <ChangePassword />
  </div>
</template>
