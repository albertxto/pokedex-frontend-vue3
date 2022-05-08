<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon'
import { stats as pokemonStats } from '@/config/pokemon'

const PokedexField = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexField.vue'))

const { calculatePokemonBaseStatPercentage, pokemonBaseStats } = usePokemon()

const pokemonStatLabel = (stat = '') => pokemonStats[stat]
</script>

<template>
  <PokedexField
    v-for="(baseStat, index) in pokemonBaseStats"
    :key="index"
    :label="pokemonStatLabel(baseStat.label)"
  >
    <div class="flex flex-wrap items-center">
      <div class="w-2/12">
        {{ baseStat.value }}
      </div>
      <AppLinearProgress
        class="w-10/12"
        size="sm"
        :value="calculatePokemonBaseStatPercentage(baseStat.value)"
      />
    </div>
  </PokedexField>
</template>
