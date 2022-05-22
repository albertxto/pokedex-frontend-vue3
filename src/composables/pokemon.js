import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { count as pokemonCount } from '@/config/pokemon'

export const usePokemon = () => {
  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  // Computed
  const isShowModal = computed({
    get: () => store.getters['pokemon/isShowModal'],
    set: (value) => {
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
  const pokemonFormSelected = computed({
    get: () => store.getters['pokemon/formSelected'],
    set: (value) => {
      store.commit('pokemon/SET_FORM_SELECTED', value)
    }
  })
  const pokemonGenders = computed(() => store.getters['pokemon/genders'])
  const pokemonGenus = computed(() => store.getters['pokemon/genus'])
  const pokemonHeight = computed(() => store.getters['pokemon/height'])
  const pokemonId = computed(() => store.getters['pokemon/id'])
  const pokemonIsFavorite = computed({
    get: () => store.getters['pokemon/isFavorite'],
    set: (value) => {
      store.commit('pokemon/SET_IS_FAVORITE', value)
    }
  })
  const pokemonIsLoading = computed(() => store.getters['pokemon/isLoading'])
  const pokemonIsLoadingEvolution = computed(() => store.getters['pokemon/isLoadingEvolution'])
  const pokemonName = computed(() => store.getters['pokemon/name'])
  const pokemonSwiper = computed({
    get: () => store.getters['pokemon/swiper'],
    set: (value) => {
      store.commit('pokemon/SET_SWIPER', value)
    }
  })
  const pokemonTypes = computed(() => store.getters['pokemon/types'])
  const pokemonVarietiesCount = computed(() => store.getters['pokemon/varietiesCount'])
  const pokemonVarietyOptions = computed(() => store.getters['pokemon/varietyOptions'])
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

  const getPokemonFormById = async (id = 1) => {
    try {
      await store.dispatch('pokemon/getPokemonFormById', id)
    } catch (error) {
      console.error(error)
    }
  }

  const validatePokemonId = async (isMounted = false) => {
    // Validate route param id exist
    if (!route.params.id) return

    // Disable pokemon swiper
    if (isMounted) pokemonSwiper.value.disable()

    // Get pokemon id from route params
    let pokemonId = Number.parseInt(route.params.id)

    // Validate pokemon id must between 1 and pokemonCount
    if (pokemonId <= 0 || pokemonId > pokemonCount) {
      if (pokemonId <= 0) {
        pokemonId = 1
      } else {
        pokemonId = pokemonCount
      }

      router.replace({ name: 'pokedexInfo', params: { id: pokemonId } })
      return
    }

    // Call get pokemon by id API
    await getPokemonById(pokemonId)

    // Reset pokemon form selected to default
    if (pokemonVarietiesCount.value) {
      pokemonFormSelected.value = pokemonVarietyOptions.value[0].value
    }

    // Enable pokemon swiper
    if (isMounted) pokemonSwiper.value.enable()
  }

  return {
    calculatePokemonBaseStatPercentage,
    getPokemonById,
    getPokemonEvolutionChain,
    getPokemonFormById,
    isShowModal,
    pokemonAbout,
    pokemonBaseExperience,
    pokemonBaseHappiness,
    pokemonBaseStats,
    pokemonEggGroups,
    pokemonEvolutionChainId,
    pokemonEvolutions,
    pokemonFormSelected,
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
    pokemonVarietiesCount,
    pokemonVarietyOptions,
    pokemonWeight,
    validatePokemonId
  }
}
