<script setup>
import { defineAsyncComponent } from 'vue'

const UserEditPassword = defineAsyncComponent(() => import('@/components/admin/users/UserEditPassword.vue'))
const UserEditProfile = defineAsyncComponent(() => import('@/components/admin/users/UserEditProfile.vue'))
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <UserEditProfile />

    <UserEditPassword />
  </div>
</template>
