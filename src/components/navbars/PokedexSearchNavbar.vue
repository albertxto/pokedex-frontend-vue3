<script setup>
import { defineAsyncComponent, onMounted, onUnmounted } from 'vue'
import { ArrowLeftIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline'
import { useNavbar } from '@/composables/navbar'

const DarkModeButton = defineAsyncComponent(() => import('@/components/headers/DarkModeButton.vue'))
const NavigationButton = defineAsyncComponent(() => import('@/components/headers/NavigationButton.vue'))
const PokemonSearchInput = defineAsyncComponent(() => import('@/components/headers/PokemonSearchInput.vue'))

const { navbarComputedClass, navbarHandleScroll } = useNavbar()

const goBack = () => {
  window.history.back()
}

onMounted(() => {
  window.addEventListener('scroll', navbarHandleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', navbarHandleScroll)
})
</script>

<template>
  <nav
    class="fixed z-50 flex flex-wrap items-center justify-between w-full px-6 py-2 md:px-20"
    :class="navbarComputedClass"
  >
    <div class="flex items-center justify-between w-full gap-6 mx-auto">
      <!-- Left navbar -->
      <div class="flex items-center w-auto">
        <NavigationButton
          to="#"
          @click="goBack"
        >
          <ArrowLeftIcon class="w-6 h-6" />
        </NavigationButton>
      </div>

      <!-- Pokemon search input -->
      <div class="flex items-center flex-grow">
        <PokemonSearchInput />
      </div>

      <!-- Right navbar -->
      <div class="flex items-center bg-white bg-opacity-0">
        <ul class="flex flex-row gap-3 ml-auto list-none sm:gap-6">
          <!-- Dark mode -->
          <li class="flex items-center">
            <DarkModeButton />
          </li>

          <!-- Dashboard -->
          <li class="flex items-center">
            <NavigationButton :to="{ name: 'dashboard' }">
              <ComputerDesktopIcon class="w-6 h-6" />
            </NavigationButton>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
