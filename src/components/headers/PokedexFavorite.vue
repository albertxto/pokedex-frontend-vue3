<script setup>
import { defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowPathIcon, HeartIcon as HeartIconOutline } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const PokedexFavoriteModal = defineAsyncComponent(() => import('@/components/headers/PokedexFavoriteModal.vue'))

defineProps({
  forceWhite: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const { getIsFavoritePokemon, isFavorite, isLoadingButton, openModal } = useFavoritePokemon()

getIsFavoritePokemon()

watch(() => route.params.id, () => {
  getIsFavoritePokemon()
})
</script>

<template>
  <a
    href="javascript:void(0)"
    class="flex items-center py-2 text-xs font-bold"
    :class="{ 'text-white': forceWhite, 'hover:text-slate-400': !isLoadingButton, 'cursor-default': isLoadingButton }"
    @click.prevent="openModal"
  >
    <ArrowPathIcon
      v-if="isLoadingButton"
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
