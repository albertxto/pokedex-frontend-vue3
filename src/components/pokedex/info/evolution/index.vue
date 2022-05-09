<script setup>
import { defineAsyncComponent } from 'vue'

const PokemonEvolution = defineAsyncComponent(() => import('@/components/pokedex/info/evolution/PokemonEvolution.vue'))
</script>

<template>
  <div class="flex flex-col gap-6">
    <PokemonEvolution />
  </div>
</template>
