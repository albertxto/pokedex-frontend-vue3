<script setup>
import { defineAsyncComponent } from 'vue'

const AdminNavbar = defineAsyncComponent(() => import('@/components/navbars/AdminNavbar.vue'))
const AdminSidebar = defineAsyncComponent(() => import('@/components/sidebar/AdminSidebar.vue'))
const AppFooter = defineAsyncComponent(() => import('@/components/footer/AppFooter.vue'))
</script>

<template>
  <div>
    <AdminSidebar />
    <div class="relative md:ml-64">
      <AdminNavbar />
      <div class="w-full p-6 mx-auto h-fit md:p-10">
        <router-view />
        <AppFooter />
      </div>
    </div>
  </div>
</template>
