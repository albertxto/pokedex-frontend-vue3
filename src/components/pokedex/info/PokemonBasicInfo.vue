<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon.js'

const PokemonType = defineAsyncComponent(() => import('@/components/pokedex/info/PokemonType.vue'))

const { pokemonGenus, pokemonId, pokemonName, pokemonTypes } = usePokemon()
</script>

<template>
  <div class="flex flex-col gap-3 px-6 text-white md:px-20">
    <div class="flex items-center justify-between gap-3">
      <h1 class="text-3xl font-bold capitalize">
        {{ pokemonName }}
      </h1>

      <div class="text-lg font-bold">
        {{ pokemonId }}
      </div>
    </div>

    <div class="flex items-center justify-between gap-3">
      <div class="flex gap-2">
        <PokemonType
          v-for="(type, index) in pokemonTypes"
          :key="index"
          :value="type"
        />
      </div>

      <div class="font-bold text-ellipsis">
        {{ pokemonGenus }}
      </div>
    </div>
  </div>
</template>
