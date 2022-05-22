<script setup>
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { usePokemon } from '@/composables/pokemon'

const BackArrow = defineAsyncComponent(() => import('@/components/headers/BackArrow.vue'))
const GithubStar = defineAsyncComponent(() => import('@/components/headers/GithubStar.vue'))
const PokedexFavorite = defineAsyncComponent(() => import('@/components/headers/PokedexFavorite.vue'))
const PokemonFormSelect = defineAsyncComponent(() => import('@/components/pokedex/info/PokemonFormSelect.vue'))

const router = useRouter()
const { pokemonVarietiesCount } = usePokemon()

const goBack = () => {
  router.push({ name: 'pokedex' })
}
</script>

<template>
  <nav class="z-50 flex flex-wrap items-center justify-between px-6 md:px-20">
    <div class="flex flex-wrap items-center justify-between w-full mx-auto">
      <!-- Box decoration -->
      <div class="absolute bg-white -z-2 -top-16 w-52 h-36 -rotate-12 -left-20 rounded-3xl opacity-10" />

      <!-- Left navbar -->
      <div class="flex items-center w-auto">
        <BackArrow @click="goBack" />
      </div>

      <!-- Pokemon forms -->
      <PokemonFormSelect v-if="pokemonVarietiesCount" />

      <!-- Dotted decoration -->
      <div
        class="absolute top-0 w-20 h-12 bg-no-repeat bg-contain -z-2 opacity-20 left-2/3"
        style="background-image: url('/src/assets/images/dotted.png')"
      />

      <!-- Right navbar -->
      <div class="flex items-center bg-white bg-opacity-0">
        <ul class="flex flex-row gap-6 ml-auto list-none">
          <!-- Favorite -->
          <li class="flex items-center">
            <PokedexFavorite />
          </li>

          <!-- Github -->
          <li class="flex items-center">
            <GithubStar />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
