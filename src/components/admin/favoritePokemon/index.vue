<script setup>
import { defineAsyncComponent } from 'vue'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const LazyLoad = defineAsyncComponent(() => import('@/components/shared/LazyLoad.vue'))
const PokedexCardSkeleton = defineAsyncComponent(() => import('@/components/shared/PokedexCardSkeleton.vue'))
const PokedexFavoriteCard = defineAsyncComponent(() => import('@/components/admin/favoritePokemon/PokedexFavoriteCard.vue'))
const PokedexUnfavoriteModal = defineAsyncComponent(() => import('@/components/admin/favoritePokemon/PokedexUnfavoriteModal.vue'))

const {
  favoritePokemonList, getFavoritePokemonList, isLoadingField, isLoadMore
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
        <PokedexFavoriteCard
          :image="pokemon.image"
          :number="pokemon.number"
          :pokemon-id="pokemon.id"
        />
      </template>
    </div>

    <LazyLoad
      v-if="isLoadMore"
      class="mt-6"
      @intersect="getFavoritePokemonList(true)"
    />
  </div>

  <PokedexUnfavoriteModal />
</template>
