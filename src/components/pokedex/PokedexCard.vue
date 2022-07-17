<script setup>
import { computed, defineAsyncComponent } from 'vue'
import pokeballImage from '@/assets/images/pokeball.png'

const LazyImage = defineAsyncComponent(() => import('@/components/shared/LazyImage.vue'))

const props = defineProps({
  image: {
    type: String,
    default: null
  },
  name: {
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
  },
  useLazyImage: {
    type: Boolean,
    default: false
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
      <div class="flex flex-wrap justify-between">
        <div class="font-bold">
          {{ name }}
        </div>
        <div>{{ number }}</div>
      </div>

      <div class="relative">
        <div
          class="absolute bg-no-repeat bg-contain w-36 h-36 left-2/3 top-1/3 opacity-20"
          :style="{ backgroundImage: `url(${pokeballImage})` }"
        />

        <div class="relative flex flex-row-reverse">
          <LazyImage
            v-if="useLazyImage"
            class="w-32 h-auto"
            :alt="name"
            :src="image"
          />
          <img
            v-else
            class="w-32 h-auto"
            :alt="name"
            :src="image"
          >
        </div>
      </div>
    </div>
  </router-link>
</template>
