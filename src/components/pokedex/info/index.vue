<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon'

const PokedexBackground = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexBackground.vue'))
const PokedexSlider = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSlider.vue'))

const { getPokemonById } = usePokemon()

getPokemonById()
</script>

<template>
  <div>
    <main>
      <PokedexBackground />
      <PokedexSlider />
    </main>
  </div>
</template>
