<script setup>
import { defineAsyncComponent, onMounted } from 'vue'

const PokedexSearch = defineAsyncComponent(() => import('@/components/pokedex/search/index.vue'))

onMounted(() => {
  document.title = 'Pokédex Search'
})
</script>

<template>
  <PokedexSearch />
</template>
