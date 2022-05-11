<script setup>
import { defineAsyncComponent } from 'vue'

const PokedexInfo = defineAsyncComponent(() => import('@/components/pokedex/info/index.vue'))
</script>

<template>
  <PokedexInfo />
</template>
