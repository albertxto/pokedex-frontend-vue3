<script setup>
import { defineAsyncComponent } from 'vue'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const PokedexCard = defineAsyncComponent(() => import('@/components/pokedex/list/PokedexCard.vue'))

const { favoritePokemonList, getFavoritePokemonList, isLoading, isLoadMore } = useFavoritePokemon()

getFavoritePokemonList()
</script>

<template>
  <div class="container">
    <div class="grid items-center justify-between grid-cols-2 gap-6 xl:grid-cols-5">
      <template
        v-for="(pokemon, index) in favoritePokemonList"
        :key="index"
      >
        <PokedexCard
          :image="pokemon.image"
          :number="pokemon.number"
          :pokemon-id="pokemon.id"
        />
      </template>
    </div>

    <div
      v-if="isLoadMore"
      class="mt-6 text-center"
    >
      <AppButton
        color="primary"
        size="sm"
        :loading="isLoading"
        @click="getFavoritePokemonList(true)"
      >
        Load More
      </AppButton>
    </div>
  </div>
</template>
