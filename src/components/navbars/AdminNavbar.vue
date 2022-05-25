<script setup>
import { defineAsyncComponent } from 'vue'

const DarkModeButton = defineAsyncComponent(() => import('@/components/headers/DarkModeButton.vue'))
const UserDropdown = defineAsyncComponent(() => import('@/components/headers/UserDropdown.vue'))
</script>

<template>
  <!-- Navbar -->
  <nav class="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start">
    <div class="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:px-10">
      <!-- Brand -->
      <a
        class="hidden text-sm font-semibold text-white uppercase md:inline-block"
        href="javascript:void(0)"
      >
        Dashboard
      </a>

      <!-- Right navbar -->
      <ul class="flex-row items-center hidden gap-6 list-none md:flex">
        <DarkModeButton force-white />
        <UserDropdown />
      </ul>
    </div>
  </nav>
</template>
