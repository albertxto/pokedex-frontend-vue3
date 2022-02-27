<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

const AddUser = defineAsyncComponent(() => import('@/components/admin/users/add/AddUser.vue'))

const store = useStore()

onMounted(() => {
  store.commit('user/RESET')
})
</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <AddUser />
  </div>
</template>
