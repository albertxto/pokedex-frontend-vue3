<script setup>
import AdminNavbar from '@/components/navbars/AdminNavbar.vue'
import AdminSidebar from '@/components/sidebar/AdminSidebar.vue'
import HeaderStats from '@/components/headers/HeaderStats.vue'
</script>

<template>
  <div>
    <AdminSidebar />
    <div class="relative md:ml-64">
      <AdminNavbar />
      <HeaderStats />
      <div class="w-full px-4 py-4 mx-auto h-fit md:px-10">
        <router-view />
      </div>
    </div>
  </div>
</template>
