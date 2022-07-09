import { computed } from 'vue'
import { useStore } from 'vuex'
import pokemonData from '@/config/pokemon.json'

export const usePokemonSearch = () => {
  const store = useStore()

  // Computed
  const pokemonSearchInput = computed({
    get: () => store.getters['pokemonSearch/input'],
    set: (value) => {
      store.commit('pokemonSearch/SET_INPUT', value)
    }
  })
  const pokemonSearchList = computed({
    get: () => store.getters['pokemonSearch/list'],
    set: (value) => {
      store.commit('pokemonSearch/SET_LIST', value)
    }
  })

  return {
    pokemonData,
    pokemonSearchInput,
    pokemonSearchList
  }
}
