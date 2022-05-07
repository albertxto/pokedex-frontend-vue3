import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export const usePokemon = () => {
  const route = useRoute()
  const store = useStore()

  // Computed
  const pokemonAbout = computed(() => store.getters['pokemon/about'])
  const pokemonHeight = computed(() => store.getters['pokemon/height'])
  const pokemonWeight = computed(() => store.getters['pokemon/weight'])

  // Method
  const getPokemonById = () => {
    try {
      store.dispatch('pokemon/getPokemonById', route.params.id)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getPokemonById,
    pokemonAbout,
    pokemonHeight,
    pokemonWeight
  }
}
