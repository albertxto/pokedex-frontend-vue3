<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon.js'
import { types as pokemonTypesConfig } from '@/config/pokemon'

const PokeballDecoration = defineAsyncComponent(() => import('@/components/pokedex/info/PokeballDecoration.vue'))
const PokedexNavbar = defineAsyncComponent(() => import('@/components/navbars/PokedexNavbar.vue'))
const PokedexSwiper = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSwiper.vue'))
const PokemonBasicInfo = defineAsyncComponent(() => import('@/components/pokedex/info/PokemonBasicInfo.vue'))

const { pokemonIsLoading, pokemonTypes } = usePokemon()

const componentClass = computed(() => pokemonIsLoading.value
  ? 'bg-slate-400 animate-pulse'
  : pokemonTypesConfig[pokemonTypes.value[0]]?.color || 'bg-slate-400'
)
</script>

<template>
  <section class="block h-550-px sm:h-600-px">
    <div
      class="flex flex-col w-full h-full gap-6 pt-6 bg-center bg-cover -z-10 sm:gap-8 sm:pt-8"
      :class="componentClass"
    >
      <PokedexNavbar />
      <PokemonBasicInfo />
      <div>
        <PokeballDecoration />
        <PokedexSwiper />
      </div>
    </div>
  </section>
</template>
