<script setup>
import pokeballImage from '@/assets/images/pokeball.png'
</script>

<template>
  <div class="p-4 overflow-hidden animate-pulse rounded-2xl hover:opacity-75 bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900">
    <div class="flex flex-wrap items-center justify-center">
      <div
        class="w-40 h-40 bg-center bg-no-repeat bg-contain opacity-20"
        :style="{ backgroundImage: `url(${pokeballImage})` }"
      />
    </div>
  </div>
</template>
