<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon.js'
import { types as pokemonTypesConfig } from '@/config/pokemon'

const PokedexNavbar = defineAsyncComponent(() => import('@/components/navbars/PokedexNavbar.vue'))
const PokemonType = defineAsyncComponent(() => import('@/components/pokedex/info/PokemonType.vue'))

const { pokemonGenus, pokemonId, pokemonIsLoading, pokemonName, pokemonTypes } = usePokemon()

const componentClass = computed(() => pokemonIsLoading.value
  ? 'bg-slate-400 animate-pulse'
  : pokemonTypesConfig[pokemonTypes.value[0]].color
)
</script>

<template>
  <section class="relative block h-600-px">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      :class="componentClass"
    >
      <PokedexNavbar />

      <div class="px-6 text-white md:px-20">
        <div class="flex flex-wrap items-center justify-between">
          <h1 class="text-3xl font-bold capitalize">
            {{ pokemonName }}
          </h1>

          <div class="text-lg font-bold">
            {{ pokemonId }}
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between mt-3">
          <div class="flex flex-wrap gap-2">
            <PokemonType
              v-for="(type, index) in pokemonTypes"
              :key="index"
              :value="type"
            />
          </div>

          <div class="font-bold">
            {{ pokemonGenus }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
