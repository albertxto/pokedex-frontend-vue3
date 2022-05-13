import { computed } from 'vue'
import { useStore } from 'vuex'

export const usePokemonList = () => {
  const store = useStore()

  // Computed
  const pokemonList = computed(() => store.getters['pokemonList/list'])
  const pokemonListIsLoading = computed(() => store.getters['pokemonList/isLoading'])
  const pokemonListIsLoadMore = computed(() => store.getters['pokemonList/isLoadMore'])
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
    pokemonList,
    pokemonListIsLoading,
    pokemonListIsLoadMore,
    pokemonListOffset
  }
}
