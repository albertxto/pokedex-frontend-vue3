<script setup>
import { defineAsyncComponent } from 'vue'
import { HeartIcon as HeartIconOutline } from '@heroicons/vue/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/solid'
import { usePokemon } from '@/composables/pokemon'

const PokedexFavoriteModal = defineAsyncComponent(() => import('@/components/headers/PokedexFavoriteModal.vue'))

const { isShowModal, pokemonIsFavorite } = usePokemon()

const openModal = () => {
  isShowModal.value = true
}
</script>

<template>
  <a
    class="flex items-center text-xs font-bold text-white hover:text-slate-200"
    href="#"
    @click="openModal"
  >
    <HeartIconSolid
      v-if="pokemonIsFavorite"
      class="w-6 h-6"
    />
    <HeartIconOutline
      v-else
      class="w-6 h-6"
    />
  </a>

  <PokedexFavoriteModal />
</template>
