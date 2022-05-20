<script setup>
import { computed } from 'vue'

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

const isShowImage = computed(() => !!(props.image && props.pokemonId))
const isShowName = computed(() => !!(props.name && props.pokemonId))
</script>

<template>
  <div class="flex flex-col items-center w-4/12 gap-1">
    <div class="relative w-16 sm:w-24">
      <div
        class="absolute w-full h-16 bg-no-repeat bg-contain sm:h-24 opacity-20"
        style="background-image: url('/src/assets/images/pokeball.png')"
      />

      <div class="relative">
        <img
          v-if="isShowImage"
          class="object-cover"
          :src="image"
        >
        <div
          v-else
          class="h-16"
        />
      </div>
    </div>

    <div
      v-if="isShowName"
      class="capitalize"
    >
      {{ name }}
    </div>
  </div>
</template>
