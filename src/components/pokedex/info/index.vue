<script setup>
import { defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemon } from '@/composables/pokemon'

const PokedexBackground = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexBackground.vue'))
const PokedexSlider = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSlider.vue'))

const route = useRoute()
const { getPokemonById } = usePokemon()

getPokemonById()

watch(() => route.params.id, () => {
  getPokemonById()
})
</script>

<template>
  <main>
    <PokedexBackground />
    <PokedexSlider />
  </main>
</template>
