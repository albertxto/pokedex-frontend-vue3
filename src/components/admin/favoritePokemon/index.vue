<script setup>
import { defineAsyncComponent } from 'vue'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const PokedexCard = defineAsyncComponent(() => import('@/components/pokedex/list/PokedexCard.vue'))
const PokedexCardSkeleton = defineAsyncComponent(() => import('@/components/shared/PokedexCardSkeleton.vue'))

const {
  favoritePokemonList, getFavoritePokemonList, isLoadingButton, isLoadingField, isLoadMore
} = useFavoritePokemon()

getFavoritePokemonList()
</script>

<template>
  <div class="container flex flex-col gap-6 md:gap-10">
    <div class="text-3xl font-bold">
      Favorite Pokémon
    </div>

    <template v-if="isLoadingField">
      <!-- Loading -->
      <div class="grid items-center justify-between grid-cols-2 gap-6 xl:grid-cols-5">
        <PokedexCardSkeleton
          v-for="index in 10"
          :key="index"
        />
      </div>
    </template>

    <div
      v-else-if="!favoritePokemonList.length"
      class="text-center"
    >
      <!-- No data -->
      No favorite pokemon found
    </div>

    <div
      v-else
      class="grid items-center justify-between grid-cols-2 gap-6 xl:grid-cols-5"
    >
      <!-- List -->
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
        :loading="isLoadingButton"
        @click="getFavoritePokemonList(true)"
      >
        Load More
      </AppButton>
    </div>
  </div>
</template>
