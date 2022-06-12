<script setup>
import { defineAsyncComponent } from 'vue'

const AppFooter = defineAsyncComponent(() => import('@/components/footer/AppFooter.vue'))
const HomeNavbar = defineAsyncComponent(() => import('@/components/navbars/HomeNavbar.vue'))
const NavigationCard = defineAsyncComponent(() => import('@/components/home/NavigationCard.vue'))
</script>

<template>
  <div class="container p-6 pokedex-slider">
    <HomeNavbar />

    <h1 class="mt-6 text-3xl font-bold">
      What Pokémon are you looking for?
    </h1>

    <div class="grid items-center justify-between grid-cols-2 gap-6 mt-20 sm:gap-10">
      <NavigationCard
        color="success"
        label="Pokédex"
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

    <AppFooter class="pt-20" />
  </div>
</template>
