<script setup>
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'

const BackArrow = defineAsyncComponent(() => import('@/components/headers/BackArrow.vue'))
const GithubStar = defineAsyncComponent(() => import('@/components/headers/GithubStar.vue'))
const PokedexFavorite = defineAsyncComponent(() => import('@/components/headers/PokedexFavorite.vue'))

const router = useRouter()

const goBack = () => {
  router.push({ name: 'pokedex' })
}
</script>

<template>
  <nav class="z-50 flex flex-wrap items-center justify-between px-6 py-6 md:px-20">
    <div class="flex flex-wrap items-center justify-between w-full mx-auto">
      <!-- Box decoration -->
      <div class="absolute bg-white -top-16 w-52 h-36 -rotate-12 -left-20 rounded-3xl opacity-10" />

      <!-- Left navbar -->
      <div class="static justify-between block w-auto z-2">
        <BackArrow @click="goBack" />
      </div>

      <!-- Dotted decoration -->
      <div
        class="absolute top-0 w-20 h-12 bg-no-repeat bg-contain opacity-20 left-2/3"
        style="background-image: url('/src/assets/images/dotted.png')"
      />

      <!-- Right navbar -->
      <div class="flex items-center flex-grow bg-white bg-opacity-0 z-2">
        <ul class="flex flex-row gap-6 ml-auto list-none">
          <!-- Favorite -->
          <li class="flex items-center">
            <PokedexFavorite />
          </li>

          <!-- Github -->
          <li class="flex items-center">
            <GithubStar />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
