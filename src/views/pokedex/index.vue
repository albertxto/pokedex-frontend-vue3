<script setup>
import { defineAsyncComponent } from 'vue'

const PokedexList = defineAsyncComponent(() => import('@/components/pokedex/list/index.vue'))
</script>

<template>
  <PokedexList />
</template>
