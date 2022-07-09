<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemonSearch } from '@/composables/pokemonSearch'
import { getPokemonImageUrlById, pokedexNumberFormat } from '@/utils/stringFormat'

const PokedexSearchCard = defineAsyncComponent(() => import('@/components/pokedex/search/PokedexSearchCard.vue'))
const PokedexSearchNavbar = defineAsyncComponent(() => import('@/components/navbars/PokedexSearchNavbar.vue'))

const { pokemonSearchList } = usePokemonSearch()
</script>

<template>
  <PokedexSearchNavbar />

  <div class="container px-6 pb-6 pokedex-slider">
    <div
      id="pokedex-search-list"
      class="grid items-center justify-between grid-cols-2 gap-6 mt-20"
    >
      <template
        v-for="(pokemon, index) in pokemonSearchList"
        :key="index"
      >
        <PokedexSearchCard
          :image="getPokemonImageUrlById(pokemon.id)"
          :name="pokemon.name"
          :number="pokedexNumberFormat(pokemon.id)"
          :pokemon-id="pokemon.id"
        />
      </template>
    </div>
  </div>
</template>
