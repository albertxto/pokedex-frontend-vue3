<script setup>
import { usePokemon } from '@/composables/pokemon.js'

const { pokemonAbout } = usePokemon()
</script>

<template>
  <p class="leading-relaxed">
    {{ pokemonAbout }}
  </p>
</template>
