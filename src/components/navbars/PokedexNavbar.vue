<script setup>
import { defineAsyncComponent } from 'vue'
import { ArrowLeftIcon, DesktopComputerIcon } from '@heroicons/vue/outline'
import { useAuth } from '@/composables/auth'
import { usePokemon } from '@/composables/pokemon'
import dottedImage from '@/assets/images/dotted.png'

const DarkModeButton = defineAsyncComponent(() => import('@/components/headers/DarkModeButton.vue'))
const NavigationButton = defineAsyncComponent(() => import('@/components/headers/NavigationButton.vue'))
const PokedexFavorite = defineAsyncComponent(() => import('@/components/headers/PokedexFavorite.vue'))
const PokemonFormSelect = defineAsyncComponent(() => import('@/components/pokedex/info/PokemonFormSelect.vue'))

const { isAuthenticated } = useAuth()
const { pokemonVarietiesCount } = usePokemon()
</script>

<template>
  <nav class="z-50 flex flex-wrap items-center justify-between px-6 md:px-20">
    <div class="flex flex-wrap items-center justify-between w-full mx-auto">
      <!-- Box decoration -->
      <div class="absolute bg-white -z-2 -top-16 w-52 h-36 -rotate-12 -left-20 rounded-3xl opacity-10" />

      <!-- Left navbar -->
      <div class="flex items-center w-auto">
        <NavigationButton
          force-white
          :to="{ name: 'pokedex' }"
        >
          <ArrowLeftIcon class="w-6 h-6" />
        </NavigationButton>
      </div>

      <!-- Pokemon forms -->
      <PokemonFormSelect v-if="pokemonVarietiesCount" />

      <!-- Dotted decoration -->
      <div
        class="absolute top-0 w-20 h-12 bg-no-repeat bg-contain -z-2 opacity-20 left-2/3"
        :style="{ backgroundImage: `url(${dottedImage})` }"
      />

      <!-- Right navbar -->
      <div class="flex items-center bg-white bg-opacity-0">
        <ul class="flex flex-row gap-3 ml-auto list-none sm:gap-6">
          <!-- Favorite -->
          <li
            v-if="isAuthenticated"
            class="flex items-center"
          >
            <PokedexFavorite />
          </li>

          <!-- Dark mode -->
          <li class="flex items-center">
            <DarkModeButton force-white />
          </li>

          <!-- Dashboard -->
          <li class="flex items-center">
            <NavigationButton
              force-white
              :to="{ name: 'dashboard' }"
            >
              <DesktopComputerIcon class="w-6 h-6" />
            </NavigationButton>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
