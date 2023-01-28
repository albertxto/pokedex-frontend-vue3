<script setup>
import { defineAsyncComponent, onMounted, onUnmounted } from 'vue'
import { ArrowLeftIcon, ComputerDesktopIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useAuth } from '@/composables/auth'
import { useNavbar } from '@/composables/navbar'
import { usePokemon } from '@/composables/pokemon'
import { usePokemonSearch } from '@/composables/pokemonSearch'

const BoxDecoration = defineAsyncComponent(() => import('@/components/headers/BoxDecoration.vue'))
const DarkModeButton = defineAsyncComponent(() => import('@/components/headers/DarkModeButton.vue'))
const DottedDecoration = defineAsyncComponent(() => import('@/components/headers/DottedDecoration.vue'))
const NavigationButton = defineAsyncComponent(() => import('@/components/headers/NavigationButton.vue'))
const PokedexFavorite = defineAsyncComponent(() => import('@/components/headers/PokedexFavorite.vue'))
const PokemonFormSelect = defineAsyncComponent(() => import('@/components/pokedex/info/PokemonFormSelect.vue'))

const { isAuthenticated } = useAuth()
const { isNavbarScrolled, navbarComputedClass, navbarHandleScroll } = useNavbar()
const { pokemonVarietiesCount } = usePokemon()
const { pokemonSearchInput } = usePokemonSearch()

onMounted(() => {
  window.addEventListener('scroll', navbarHandleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', navbarHandleScroll)
})
</script>

<template>
  <nav
    class="fixed z-50 flex flex-wrap items-center justify-between w-full px-6 py-2 transition-colors md:px-20"
    :class="navbarComputedClass"
  >
    <div class="flex items-center justify-between w-full mx-auto">
      <!-- Left navbar -->
      <div class="flex items-center w-auto">
        <NavigationButton
          :force-white="!isNavbarScrolled"
          :to="{ name: 'pokedex' }"
        >
          <ArrowLeftIcon class="w-6 h-6" />
        </NavigationButton>
      </div>

      <!-- Pokemon forms -->
      <PokemonFormSelect v-if="pokemonVarietiesCount" />

      <!-- Right navbar -->
      <div class="flex items-center bg-white bg-opacity-0">
        <ul class="flex flex-row gap-3 ml-auto list-none sm:gap-6">
          <!-- Favorite -->
          <li
            v-if="isAuthenticated"
            class="flex items-center"
          >
            <PokedexFavorite :force-white="!isNavbarScrolled" />
          </li>

          <!-- Search -->
          <li class="flex items-center">
            <NavigationButton
              :force-white="!isNavbarScrolled"
              :to="{ name: 'pokedexSearch', query: { name: pokemonSearchInput } }"
            >
              <MagnifyingGlassIcon class="w-6 h-6" />
            </NavigationButton>
          </li>

          <!-- Dark mode -->
          <li class="flex items-center">
            <DarkModeButton :force-white="!isNavbarScrolled" />
          </li>

          <!-- Dashboard -->
          <li class="flex items-center">
            <NavigationButton
              :force-white="!isNavbarScrolled"
              :to="{ name: 'dashboard' }"
            >
              <ComputerDesktopIcon class="w-6 h-6" />
            </NavigationButton>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <BoxDecoration />

  <DottedDecoration />
</template>
