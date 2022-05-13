<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemonList } from '@/composables/pokemonList'

const PokedexCard = defineAsyncComponent(() => import('@/components/pokedex/list/PokedexCard.vue'))

const { getPokemonList, pokemonListIsLoading, pokemonListIsLoadMore, pokemonList } = usePokemonList()

getPokemonList()
</script>

<template>
  <div class="container p-6 pokedex-slider">
    <h1 class="text-3xl font-bold">
      Pokedex
    </h1>

    <div class="grid items-center justify-between grid-cols-2 gap-6 mt-6">
      <template
        v-for="(pokemon, index) in pokemonList"
        :key="index"
      >
        <PokedexCard
          :image="pokemon.image"
          :name="pokemon.name"
          :pokemon-id="pokemon.id"
        />
      </template>
    </div>

    <div
      v-if="pokemonListIsLoadMore"
      class="mt-6 text-center"
    >
      <AppButton
        color="primary"
        size="sm"
        :loading="pokemonListIsLoading"
        @click="getPokemonList(true)"
      >
        Load More
      </AppButton>
    </div>
  </div>
</template>
