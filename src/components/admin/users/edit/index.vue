<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useUser } from '@/composables/user'

const route = useRoute()
const { getUserById } = useUser()

const ChangePassword = defineAsyncComponent(() => import('@/components/admin/users/edit/ChangePassword.vue'))
const EditProfile = defineAsyncComponent(() => import('@/components/admin/users/edit/EditProfile.vue'))

getUserById(route.params.id)
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <EditProfile />

    <ChangePassword />
  </div>
</template>
