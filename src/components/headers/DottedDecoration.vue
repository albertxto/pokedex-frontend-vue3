<script setup>
import dottedImage from '@/assets/images/dotted.png'
</script>

<template>
  <div
    class="absolute top-0 w-20 h-12 bg-no-repeat bg-contain opacity-20 left-2/3"
    :style="{ backgroundImage: `url(${dottedImage})` }"
  />
</template>
