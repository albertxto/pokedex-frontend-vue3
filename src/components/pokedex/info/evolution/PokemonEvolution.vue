<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon'

const PokemonEvolutionChain = defineAsyncComponent(() => import('@/components/pokedex/info/evolution/PokemonEvolutionChain.vue'))
const PokedexSection = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSection.vue'))

const { getPokemonEvolutionChain, pokemonEvolutions, pokemonIsLoadingEvolution } = usePokemon()
getPokemonEvolutionChain()
</script>

<template>
  <PokedexSection
    label="Evolution Chain"
    size="md"
  >
    <template v-if="pokemonIsLoadingEvolution">
      <PokemonEvolutionChain />
    </template>

    <template v-else>
      <div
        v-if="!pokemonEvolutions.length"
        class="text-center min-h-screen-75"
      >
        No evolution
      </div>

      <template
        v-for="(evolution, index) in pokemonEvolutions"
        v-else
        :key="index"
      >
        <PokemonEvolutionChain :evolution="evolution" />
      </template>
    </template>
  </PokedexSection>
</template>
