<script setup>
import { usePokemon } from '@/composables/pokemon'

const { pokemonAbout } = usePokemon()
</script>

<template>
  <p
    id="pokemon-about"
    class="leading-relaxed"
  >
    {{ pokemonAbout }}
  </p>
</template>
