<script setup>
import { defineAsyncComponent } from 'vue'
import { useAuth } from '@/composables/auth'
import { useUser } from '@/composables/user'

const ChangePassword = defineAsyncComponent(() => import('@/components/admin/users/edit/ChangePassword.vue'))
const EditProfile = defineAsyncComponent(() => import('@/components/admin/users/edit/EditProfile.vue'))

const { currentUserId } = useAuth()
const { getUserById } = useUser()

getUserById(currentUserId.value)
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <EditProfile />

    <ChangePassword />
  </div>
</template>
