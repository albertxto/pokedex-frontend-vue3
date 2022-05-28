<script setup>
import { defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { HeartIcon as HeartIconOutline, RefreshIcon } from '@heroicons/vue/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/solid'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const PokedexFavoriteModal = defineAsyncComponent(() => import('@/components/headers/PokedexFavoriteModal.vue'))

const route = useRoute()
const { getFavoritePokemon, isFavorite, isLoading, openModal } = useFavoritePokemon()

getFavoritePokemon()

watch(() => route.params.id, () => {
  getFavoritePokemon()
})
</script>

<template>
  <a
    class="flex items-center py-2 text-xs font-bold text-white cursor-pointer"
    :class="{ 'hover:text-slate-400': !isLoading, 'cursor-default': isLoading }"
    @click="openModal"
  >
    <RefreshIcon
      v-if="isLoading"
      class="w-6 h-6 animate-spin"
    />
    <template v-else>
      <HeartIconSolid
        v-if="isFavorite"
        class="w-6 h-6"
      />
      <HeartIconOutline
        v-else
        class="w-6 h-6"
      />
    </template>
  </a>

  <PokedexFavoriteModal />
</template>
