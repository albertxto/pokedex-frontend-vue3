<script setup>
import { defineAsyncComponent } from 'vue'

const PokemonAbout = defineAsyncComponent(() => import('@/components/pokedex/info/about/PokemonAbout.vue'))
const PokemonBreeding = defineAsyncComponent(() => import('@/components/pokedex/info/about/PokemonBreeding.vue'))
const PokemonMeasurement = defineAsyncComponent(() => import('@/components/pokedex/info/about/PokemonMeasurement.vue'))
const PokemonTraining = defineAsyncComponent(() => import('@/components/pokedex/info/about/PokemonTraining.vue'))
</script>

<template>
  <div class="flex flex-col gap-6">
    <PokemonAbout />
    <PokemonMeasurement />
    <PokemonBreeding />
    <PokemonTraining />
  </div>
</template>
