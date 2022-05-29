import { computed } from 'vue'
import { useStore } from 'vuex'

export const usePokemonList = () => {
  const store = useStore()

  // Computed
  const isLoadingButton = computed(() => store.getters['pokemonList/isLoadingButton'])
  const isLoadingField = computed(() => store.getters['pokemonList/isLoadingField'])
  const isLoadMore = computed(() => store.getters['pokemonList/isLoadMore'])
  const pokemonList = computed(() => store.getters['pokemonList/list'])
  const pokemonListOffset = computed(() => store.getters['pokemonList/offset'])

  // Method
  const getPokemonList = async (nextPage = false) => {
    try {
      await store.dispatch('pokemonList/getPokemonList', nextPage)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getPokemonList,
    isLoadingButton,
    isLoadingField,
    isLoadMore,
    pokemonList,
    pokemonListOffset
  }
}
