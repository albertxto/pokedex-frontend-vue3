<script setup>
import { useRouter } from 'vue-router'
import { usePokemonSearch } from '@/composables/pokemonSearch'

const router = useRouter()
const { pokemonData, pokemonSearchInput, pokemonSearchList } = usePokemonSearch()

const onSearchPokemon = () => {
  // Set query params
  router.replace({ name: 'pokedexSearch', query: { name: pokemonSearchInput.value } })

  // Remove list if input is empty
  if (!pokemonSearchInput.value || pokemonSearchInput.value.length <= 1) {
    pokemonSearchList.value = []
    return
  }

  // Search from pokemon.json file
  pokemonSearchList.value = pokemonData.filter((pokemon) => {
    return pokemon.name.includes(pokemonSearchInput.value.toLowerCase())
  })
}
</script>

<template>
  <AppInput
    v-model="pokemonSearchInput"
    class="w-full"
    placeholder="Search Pokémon"
    type="search"
    @input="onSearchPokemon"
  />
</template>
