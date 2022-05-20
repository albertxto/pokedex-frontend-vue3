<script setup>
import { defineAsyncComponent, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePokemon } from '@/composables/pokemon'
import { count as pokemonCount } from '@/config/pokemon'

const PokedexBackground = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexBackground.vue'))
const PokedexSlider = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSlider.vue'))

const route = useRoute()
const router = useRouter()
const { getPokemonById } = usePokemon()

const validatePokemonId = () => {
  if (!route.params.id) return

  let pokemonId = Number.parseInt(route.params.id)

  if (pokemonId <= 0 || pokemonId > pokemonCount) {
    if (pokemonId <= 0) {
      pokemonId = 1
    } else if (pokemonId > pokemonCount) {
      pokemonId = pokemonCount
    }

    router.replace({ name: 'pokedexInfo', params: { id: pokemonId } })
    return
  }

  getPokemonById(pokemonId)
}

validatePokemonId()

watch(() => route.params.id, () => {
  validatePokemonId()
})
</script>

<template>
  <main>
    <PokedexBackground />
    <PokedexSlider />
  </main>
</template>
