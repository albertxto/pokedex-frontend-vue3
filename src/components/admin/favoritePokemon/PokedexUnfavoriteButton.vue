<script setup>
import { RefreshIcon, TrashIcon } from '@heroicons/vue/solid'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const props = defineProps({
  pokemonId: {
    type: Number,
    default: null
  }
})

const { favoritePokemonSelected, isLoadingButton, openModal } = useFavoritePokemon()

const onClick = () => {
  favoritePokemonSelected.value = props.pokemonId
  openModal()
}

</script>

<template>
  <a
    class="absolute right-0 p-1 rounded-full cursor-pointer -top-1 hover:bg-slate-500"
    @click.prevent="onClick"
  >
    <RefreshIcon
      v-if="isLoadingButton"
      class="w-6 h-6 animate-spin"
    />
    <TrashIcon class="w-6 h-6" />
  </a>
</template>
