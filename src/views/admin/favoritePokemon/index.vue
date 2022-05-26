<script setup>
import { defineAsyncComponent } from 'vue'

const FavoritePokemonList = defineAsyncComponent(() => import('@/components/admin/favoritePokemon/index.vue'))
</script>

<template>
  <FavoritePokemonList />
</template>
