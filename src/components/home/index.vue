<script setup>
import { defineAsyncComponent } from 'vue'

const NavigationCard = defineAsyncComponent(() => import('@/components/home/NavigationCard.vue'))
</script>

<template>
  <div class="container px-6 py-20 sm:px-20 pokedex-slider">
    <h1 class="text-3xl font-bold">
      What Pokemon are you looking for?
    </h1>

    <div class="grid items-center justify-between grid-cols-2 gap-6 mt-20 sm:gap-10">
      <NavigationCard
        color="success"
        label="Pokedex"
        :to="{ name: 'pokedex' }"
      />

      <NavigationCard
        color="danger"
        label="Dashboard"
        :to="{ name: 'login' }"
      />

      <NavigationCard
        color="info"
        disabled
        label="Moves"
      />

      <NavigationCard
        color="warning"
        disabled
        label="Abilities"
      />

      <NavigationCard
        color="primary"
        disabled
        label="Items"
      />

      <NavigationCard
        color="dark"
        disabled
        label="Type Effects"
      />
    </div>
  </div>
</template>
