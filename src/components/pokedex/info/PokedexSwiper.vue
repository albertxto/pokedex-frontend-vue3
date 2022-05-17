<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemonList } from '@/composables/pokemonList'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/virtual'

// Import Swiper core and required modules
import { Keyboard, Pagination, Virtual } from 'swiper'

// Composition API
const route = useRoute()
const { getPokemonList, pokemonList, pokemonListOffset } = usePokemonList()

// Swiper props
const modules = [Keyboard, Pagination, Virtual]
const windowWidth = ref(0)
const swiperHeight = computed(() => windowWidth.value >= 640 ? 240 : 160)
const initialSlide = computed(() => route.params.id - 1)

// Get next Pokemons if offset close to swiper active index
const onSlideChange = (swiper) => {
  if (pokemonListOffset.value - 1 === swiper.activeIndex) {
    getPokemonList(true)
  }
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

onBeforeUnmount(() => {
  // Remove event listener before unmount
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <Swiper
    ref="swiperRef"
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
    @slide-change="onSlideChange"
  >
    <SwiperSlide
      v-for="(pokemon, index) in pokemonList"
      :key="index"
      :virtual-index="index"
    >
      <img
        class="block object-fill w-40 h-40 sm:w-60 sm:h-60"
        loading="lazy"
        :src="pokemon.image"
      >
    </SwiperSlide>
  </Swiper>
</template>
