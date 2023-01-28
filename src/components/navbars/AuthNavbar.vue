<script setup>
import { defineAsyncComponent } from 'vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const DarkModeButton = defineAsyncComponent(() => import('@/components/headers/DarkModeButton.vue'))
const NavigationButton = defineAsyncComponent(() => import('@/components/headers/NavigationButton.vue'))
</script>

<template>
  <nav class="absolute top-0 z-50 w-full p-6">
    <div class="flex flex-wrap items-center justify-between w-full mx-auto">
      <!-- Left navbar -->
      <div class="flex items-center w-auto">
        <NavigationButton :to="{ name: 'home' }">
          <ArrowLeftIcon class="w-6 h-6" />
        </NavigationButton>
      </div>

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
