<script setup>
import { computed, defineAsyncComponent } from 'vue'
import pokeballImage from '@/assets/images/pokeball.png'

const LazyImage = defineAsyncComponent(() => import('@/components/shared/LazyImage.vue'))
const PokedexUnfavoriteButton = defineAsyncComponent(() => import('@/components/admin/favoritePokemon/PokedexUnfavoriteButton.vue'))

const props = defineProps({
  image: {
    type: String,
    default: null
  },
  number: {
    type: String,
    default: null
  },
  pokemonId: {
    type: Number,
    default: null
  }
})

const isShowCard = computed(() => !!props.pokemonId)
</script>

<template>
  <router-link
    v-if="isShowCard"
    class="capitalize"
    :to="{ name: 'pokedexInfo', params: { id: pokemonId } }"
  >
    <div class="p-4 overflow-hidden h-44 rounded-2xl hover:opacity-75 bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900">
      <div class="relative">
        <div>{{ number }}</div>
        <PokedexUnfavoriteButton :pokemon-id="pokemonId" />
      </div>

      <div class="relative">
        <div
          class="absolute bg-no-repeat bg-contain w-36 h-36 left-2/3 top-1/3 opacity-20"
          :style="{ backgroundImage: `url(${pokeballImage})` }"
        />

        <div class="relative flex">
          <LazyImage
            class="w-32 h-auto"
            :alt="number"
            :src="image"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>
