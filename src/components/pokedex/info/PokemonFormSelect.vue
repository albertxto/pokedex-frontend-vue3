<script setup>
import { nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemon } from '@/composables/pokemon.js'
import { getPokemonImageUrlById } from '@/utils/stringFormat'

const route = useRoute()
const { getPokemonFormById, pokemonFormSelected, pokemonSwiper, pokemonVarietyOptions } = usePokemon()

pokemonFormSelected.value = pokemonVarietyOptions.value[0].value

const onChangeForm = async () => {
  // Disable pokemon swiper
  pokemonSwiper.value.disable()

  // Call get pokemon form by id API
  await getPokemonFormById(pokemonFormSelected.value)

  // Wait for the DOM updates to complete and change current pokemon image
  nextTick(() => {
    const currentPokemonImage = document.getElementById(`pokemon-${route.params.id}`)
    currentPokemonImage.src = getPokemonImageUrlById(pokemonFormSelected.value)
  })

  // Enable pokemon swiper
  pokemonSwiper.value.enable()
}
</script>

<template>
  <AppSelect
    v-model="pokemonFormSelected"
    :options="pokemonVarietyOptions"
    @change="onChangeForm"
  />
</template>
