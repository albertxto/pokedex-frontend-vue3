<script setup>
import { computed, defineAsyncComponent } from 'vue'

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
  pokemonId: {
    type: String,
    default: null
  }
})

const isShowCard = computed(() => !!props.pokemonId)
const pokemonIdLabel = computed(() => `#${props.pokemonId.padStart(3, '0')}`)
const pokemonNameLabel = computed(() => props.name.replaceAll('-', ' '))
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
          {{ pokemonNameLabel }}
        </div>
        <div>{{ pokemonIdLabel }}</div>
      </div>

      <div class="relative">
        <div
          class="absolute bg-no-repeat bg-contain w-36 h-36 left-2/3 top-1/3 opacity-20"
          style="background-image: url('/src/assets/images/pokeball.png')"
        />

        <div class="relative flex flex-row-reverse">
          <LazyImage
            class="w-32 h-auto"
            :src="image"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>
