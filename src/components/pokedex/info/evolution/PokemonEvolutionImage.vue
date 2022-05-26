<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePokemon } from '@/composables/pokemon'

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
    type: Number,
    default: null
  }
})

const route = useRoute()
const router = useRouter()
const { pokemonSwiper } = usePokemon()

const isShowImage = computed(() => !!(props.image && props.pokemonId))
const isShowName = computed(() => !!(props.name && props.pokemonId))

const onChangePokemon = () => {
  // Validate current pokemon
  if (props.pokemonId === route.params.id) return

  // Scroll to top
  window.scrollTo(0, 0)

  // Slide image to the clicked pokemon
  pokemonSwiper.value.slideTo(props.pokemonId - 1)

  // Change url param to get clicked pokemon
  router.replace({ name: 'pokedexInfo', params: { id: props.pokemonId } })
}
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
          class="object-cover cursor-pointer"
          :src="image"
          @click="onChangePokemon"
        >
        <div
          v-else
          class="h-16"
        />
      </div>
    </div>

    <div
      v-if="isShowName"
      class="capitalize cursor-pointer"
      @click="onChangePokemon"
    >
      {{ name }}
    </div>
  </div>
</template>
