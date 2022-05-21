import { computed } from 'vue'
import { useStore } from 'vuex'

export const usePokemon = () => {
  const store = useStore()

  // Computed
  const isShowModal = computed({
    get () {
      return store.getters['pokemon/isShowModal']
    },
    set (value) {
      store.commit('pokemon/SET_IS_SHOW_MODAL', value)
    }
  })
  const pokemonAbout = computed(() => store.getters['pokemon/about'])
  const pokemonBaseExperience = computed(() => store.getters['pokemon/baseExperience'])
  const pokemonBaseHappiness = computed(() => store.getters['pokemon/baseHappiness'])
  const pokemonBaseStats = computed(() => store.getters['pokemon/baseStats'])
  const pokemonEggGroups = computed(() => store.getters['pokemon/eggGroups'])
  const pokemonEvolutionChainId = computed(() => store.getters['pokemon/evolutionChainId'])
  const pokemonEvolutions = computed(() => store.getters['pokemon/evolutions'])
  const pokemonGenders = computed(() => store.getters['pokemon/genders'])
  const pokemonGenus = computed(() => store.getters['pokemon/genus'])
  const pokemonHeight = computed(() => store.getters['pokemon/height'])
  const pokemonId = computed(() => store.getters['pokemon/id'])
  const pokemonIsFavorite = computed({
    get () {
      return store.getters['pokemon/isFavorite']
    },
    set (value) {
      store.commit('pokemon/SET_IS_FAVORITE', value)
    }
  })
  const pokemonIsLoading = computed(() => store.getters['pokemon/isLoading'])
  const pokemonIsLoadingEvolution = computed(() => store.getters['pokemon/isLoadingEvolution'])
  const pokemonName = computed(() => store.getters['pokemon/name'])
  const pokemonSwiper = computed({
    get () {
      return store.getters['pokemon/swiper']
    },
    set (value) {
      store.commit('pokemon/SET_SWIPER', value)
    }
  })
  const pokemonTypes = computed(() => store.getters['pokemon/types'])
  const pokemonWeight = computed(() => store.getters['pokemon/weight'])

  // Method
  const calculatePokemonBaseStatPercentage = (stat = 0) => {
    return Number.parseFloat((stat * 100 / 255).toFixed(2))
  }

  const getPokemonById = async (id = 1) => {
    try {
      await store.dispatch('pokemon/getPokemonById', id)
    } catch (error) {
      console.error(error)
    }
  }

  const getPokemonEvolutionChain = async () => {
    store.commit('pokemon/SET_IS_LOADING_EVOLUTION', true)
    try {
      await store.dispatch('pokemon/getPokemonEvolutionChain')
    } catch (error) {
      console.error(error)
    } finally {
      store.commit('pokemon/SET_IS_LOADING_EVOLUTION', false)
    }
  }

  return {
    calculatePokemonBaseStatPercentage,
    getPokemonById,
    getPokemonEvolutionChain,
    isShowModal,
    pokemonAbout,
    pokemonBaseExperience,
    pokemonBaseHappiness,
    pokemonBaseStats,
    pokemonEggGroups,
    pokemonEvolutionChainId,
    pokemonEvolutions,
    pokemonGenders,
    pokemonGenus,
    pokemonHeight,
    pokemonId,
    pokemonIsFavorite,
    pokemonIsLoading,
    pokemonIsLoadingEvolution,
    pokemonName,
    pokemonSwiper,
    pokemonTypes,
    pokemonWeight
  }
}
