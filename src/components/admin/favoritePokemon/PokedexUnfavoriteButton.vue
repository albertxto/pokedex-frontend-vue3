<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const props = defineProps({
  pokemonId: {
    type: Number,
    default: null
  }
})

const { favoritePokemonSelected, openModal } = useFavoritePokemon()

const onClick = () => {
  favoritePokemonSelected.value = props.pokemonId
  openModal()
}

</script>

<template>
  <a
    href="javascript:void(0)"
    class="absolute right-0 p-1 rounded-full -top-1 hover:bg-slate-500"
    @click.prevent="onClick"
  >
    <TrashIcon class="w-6 h-6" />
  </a>
</template>
