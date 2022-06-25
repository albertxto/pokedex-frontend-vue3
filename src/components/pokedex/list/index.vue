<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemonList } from '@/composables/pokemonList'

const LazyLoad = defineAsyncComponent(() => import('@/components/shared/LazyLoad.vue'))
const PokedexCard = defineAsyncComponent(() => import('@/components/pokedex/list/PokedexCard.vue'))
const PokedexCardSkeleton = defineAsyncComponent(() => import('@/components/shared/PokedexCardSkeleton.vue'))
const PokedexListNavbar = defineAsyncComponent(() => import('@/components/navbars/PokedexListNavbar.vue'))

const { getPokemonList, isLoadingField, isLoadMore, pokemonList } = usePokemonList()

if (!pokemonList.value.length) {
  getPokemonList()
}
</script>

<template>
  <div class="container p-6 pokedex-slider">
    <PokedexListNavbar />

    <h1 class="mt-6 text-3xl font-bold">
      Pokédex
    </h1>

    <div
      id="pokedex-list"
      class="grid items-center justify-between grid-cols-2 gap-6 mt-6"
    >
      <template v-if="isLoadingField">
        <PokedexCardSkeleton
          v-for="index in 10"
          :key="index"
        />
      </template>

      <template
        v-for="(pokemon, index) in pokemonList"
        v-else
        :key="index"
      >
        <PokedexCard
          :image="pokemon.image"
          :name="pokemon.name"
          :number="pokemon.number"
          :pokemon-id="pokemon.id"
        />
      </template>
    </div>

    <LazyLoad
      v-if="isLoadMore"
      id="load-more"
      class="mt-6"
      @intersect="getPokemonList(true)"
    />
  </div>
</template>
