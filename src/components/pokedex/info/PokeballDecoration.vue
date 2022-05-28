<script setup>
import pokeballImage from '@/assets/images/pokeball.png'
</script>

<template>
  <div
    class="absolute left-0 right-0 w-40 h-40 mx-auto bg-no-repeat bg-contain sm:w-60 sm:h-60 animate-spin-slow opacity-20"
    :style="{ backgroundImage: `url(${pokeballImage})` }"
  />
</template>
