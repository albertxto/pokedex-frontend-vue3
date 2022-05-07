<script setup>
import { defineAsyncComponent } from 'vue'

const PokemonAbout = defineAsyncComponent(() => import('@/components/pokedex/info/about/PokemonAbout.vue'))
const PokemonMeasurement = defineAsyncComponent(() => import('@/components/pokedex/info/about/PokemonMeasurement.vue'))
</script>

<template>
  <div class="flex flex-col gap-6">
    <PokemonAbout />
    <PokemonMeasurement />
  </div>
</template>
