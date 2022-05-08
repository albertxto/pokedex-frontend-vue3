<script setup>
import { defineAsyncComponent } from 'vue'

const PokemonBaseStats = defineAsyncComponent(() => import('@/components/pokedex/info/baseStats/PokemonBaseStats.vue'))
</script>

<template>
  <div class="flex flex-col gap-6">
    <PokemonBaseStats />
  </div>
</template>
