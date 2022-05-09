<script setup>
import { defineAsyncComponent } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/solid'

const PokemonEvolutionImage = defineAsyncComponent(() => import('@/components/pokedex/info/evolution/PokemonEvolutionImage.vue'))

defineProps({
  evolution: {
    type: Object,
    default () {
      return {}
    }
  }
})
</script>

<template>
  <div class="flex flex-wrap items-center justify-evenly">
    <PokemonEvolutionImage
      :image="evolution.fromImage"
      :name="evolution.fromName"
    />

    <div class="flex flex-col items-center w-4/12 gap-2">
      <ArrowRightIcon class="w-4 h-4 sm:w-5 sm:h-5" />
      <div class="text-xs font-bold text-center capitalize ">
        {{ evolution.detail }}
      </div>
    </div>

    <PokemonEvolutionImage
      :image="evolution.toImage"
      :name="evolution.toName"
    />
  </div>
</template>
