<script setup>
import { defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemon } from '@/composables/pokemon'

const PokedexBackground = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexBackground.vue'))
const PokedexSlider = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSlider.vue'))

const route = useRoute()
const { validatePokemonId } = usePokemon()

validatePokemonId()

watch(() => route.params.id, () => {
  validatePokemonId(true)
})
</script>

<template>
  <main>
    <PokedexBackground />
    <PokedexSlider />
  </main>
</template>
