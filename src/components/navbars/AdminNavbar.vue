<script setup>
// import UserDropdown from '@/components/Dropdowns/UserDropdown.vue'
import { SearchIcon } from '@heroicons/vue/solid'
</script>

<template>
  <!-- Navbar -->
  <nav class="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start">
    <div class="flex flex-wrap items-center justify-between w-full px-4 mx-autp md:flex-nowrap md:px-10">
      <!-- Brand -->
      <a
        class="hidden text-sm font-semibold text-white uppercase lg:inline-block"
        href="javascript:void(0)"
      >
        Dashboard
      </a>
      <!-- Form -->
      <form class="flex-row flex-wrap items-center hidden mr-3 md:flex lg:ml-auto">
        <AppInput
          type="text"
          placeholder="Search here..."
        >
          <template #left>
            <SearchIcon class="w-5 h-5" />
          </template>
        </AppInput>
      </form>
      <!-- User -->
      <ul class="flex-col items-center hidden list-none md:flex-row md:flex">
        <!-- <user-dropdown /> -->
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
