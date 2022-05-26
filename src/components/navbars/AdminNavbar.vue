<script setup>
import { defineAsyncComponent } from 'vue'

const DarkModeButton = defineAsyncComponent(() => import('@/components/headers/DarkModeButton.vue'))
const UserDropdown = defineAsyncComponent(() => import('@/components/headers/UserDropdown.vue'))
</script>

<template>
  <!-- Navbar -->
  <nav class="z-10 items-center hidden w-full bg-transparent md:flex sm:p-4 md:flex-row md:flex-nowrap md:justify-start">
    <div class="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:px-10">
      <!-- Brand -->
      <span class="text-sm font-bold uppercase md:inline-block">
        Dashboard
      </span>

      <!-- Right navbar -->
      <ul class="flex-row items-center gap-6 list-none md:flex">
        <DarkModeButton />
        <UserDropdown />
      </ul>
    </div>
  </nav>
</template>
