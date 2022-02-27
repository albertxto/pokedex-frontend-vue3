<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const ChangePassword = defineAsyncComponent(() => import('@/components/admin/users/edit/ChangePassword.vue'))
const EditProfile = defineAsyncComponent(() => import('@/components/admin/users/edit/EditProfile.vue'))

const getUserById = async () => {
  try {
    await store.dispatch('user/getUserById', route.params.id)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  store.commit('user/RESET')
  getUserById()
})
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <EditProfile />

    <ChangePassword />
  </div>
</template>
