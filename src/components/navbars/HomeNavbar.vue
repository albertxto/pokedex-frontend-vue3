<script setup>
import { defineAsyncComponent } from 'vue'

const DarkModeButton = defineAsyncComponent(() => import('@/components/headers/DarkModeButton.vue'))
</script>

<template>
  <nav class="z-50 flex flex-wrap items-center justify-between">
    <div class="flex flex-wrap items-center justify-between w-full mx-auto">
      <!-- Left navbar -->
      <div class="flex items-center w-auto" />

      <!-- Right navbar -->
      <div class="flex items-center bg-white bg-opacity-0">
        <ul class="flex flex-row gap-3 ml-auto list-none sm:gap-6">
          <!-- Dark mode -->
          <li class="flex items-center">
            <DarkModeButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
