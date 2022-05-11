<script setup>
import { defineAsyncComponent } from 'vue'

const AdminNavbar = defineAsyncComponent(() => import('@/components/navbars/AdminNavbar.vue'))
const AdminSidebar = defineAsyncComponent(() => import('@/components/sidebar/AdminSidebar.vue'))
const HeaderStats = defineAsyncComponent(() => import('@/components/headers/HeaderStats.vue'))
</script>

<template>
  <div>
    <AdminSidebar />
    <div class="relative md:ml-64">
      <AdminNavbar />
      <HeaderStats />
      <div class="w-full p-6 mx-auto h-fit md:p-10">
        <router-view />
      </div>
    </div>
  </div>
</template>
