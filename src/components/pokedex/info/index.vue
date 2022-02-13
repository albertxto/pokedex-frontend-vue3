<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PokedexBackground from '@/components/pokedex/info/PokedexBackground.vue'
import PokedexSlider from '@/components/pokedex/info/PokedexSlider.vue'

const route = useRoute()
const store = useStore()

const getPokemonById = () => {
  try {
    store.dispatch('pokemon/getPokemonById', route.params.id)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getPokemonById()
})
</script>

<template>
  <div>
    <main>
      <PokedexBackground />
      <PokedexSlider />
    </main>
  </div>
</template>
