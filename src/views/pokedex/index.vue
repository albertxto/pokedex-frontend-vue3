<script setup>
import { defineAsyncComponent, onMounted } from 'vue'

const PokedexList = defineAsyncComponent(() => import('@/components/pokedex/list/index.vue'))

onMounted(() => {
  document.title = 'Pokédex List'
})
</script>

<template>
  <PokedexList />
</template>
