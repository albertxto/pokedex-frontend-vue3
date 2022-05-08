<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon'

const PokedexField = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexField.vue'))
const PokedexSection = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSection.vue'))

const { pokemonBaseExperience, pokemonBaseHappiness } = usePokemon()
</script>

<template>
  <PokedexSection label="Training">
    <PokedexField label="Base EXP">
      {{ pokemonBaseExperience }}
    </PokedexField>

    <PokedexField label="Base Happiness">
      {{ pokemonBaseHappiness }}
    </PokedexField>
  </PokedexSection>
</template>
