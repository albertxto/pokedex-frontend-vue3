<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePokemon } from '@/composables/pokemon'
import { count as pokemonCount } from '@/config/pokemon'
import { getPokemonImageUrlById } from '@/utils/stringFormat'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/virtual'

// Import Swiper core and required modules
import { Keyboard, Virtual } from 'swiper'

// Composition API
const { pokemonSwiper } = usePokemon()
const route = useRoute()
const router = useRouter()

// Swiper props
const modules = [Keyboard, Virtual]
const windowWidth = ref(0)
const swiperHeight = computed(() => windowWidth.value >= 640 ? 240 : 160)
const initialSlide = computed(() => route.params.id - 1)

// Set swiper ref
const setSwiperRef = (swiper) => {
  pokemonSwiper.value = swiper
}

const onSlideChange = (swiper) => {
  const pokemonId = swiper.activeIndex + 1

  // Change url params to get current Pokemon
  router.replace({ name: 'pokedexInfo', params: { id: pokemonId } })

  // Wait for the DOM updates to complete and change current pokemon image
  nextTick(() => {
    const currentPokemonImage = document.getElementById(`pokemon-${pokemonId}`)
    currentPokemonImage.src = getPokemonImageUrlById(pokemonId)
  })
}

// Set window inner width to ref
const onResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  // Wait for the DOM updates to complete and add event listener
  nextTick(() => {
    window.addEventListener('resize', onResize)
  })
})

onUnmounted(() => {
  // Remove event listener on unmounted
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <Swiper
    :centered-slides="true"
    :grab-cursor="true"
    :height="swiperHeight"
    :initial-slide="initialSlide"
    :keyboard="{
      enabled: true,
      onlyInViewport: true
    }"
    :modules="modules"
    :observer="true"
    :observe-parents="true"
    :slides-per-view="2"
    :virtual="true"
    @swiper="setSwiperRef"
    @slide-change="onSlideChange"
  >
    <SwiperSlide
      v-for="index in pokemonCount"
      :key="index"
      :virtual-index="index"
    >
      <img
        :id="`pokemon-${index}`"
        class="block object-fill w-40 h-40 sm:w-60 sm:h-60"
        loading="lazy"
        :src="getPokemonImageUrlById(index)"
      >
    </SwiperSlide>
  </Swiper>
</template>
