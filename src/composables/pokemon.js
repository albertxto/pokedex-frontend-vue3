import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { capitalize, pokedexNumberFormat } from '@/utils/stringFormat'
import { validatePokemonRoute } from '@/utils/validation'

export const usePokemon = () => {
  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  // Computed
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
  const pokemonId = computed(() => pokedexNumberFormat(route.params.id))
  const pokemonIsLoading = computed(() => store.getters['pokemon/isLoading'])
  const pokemonIsLoadingEvolution = computed({
    get: () => store.getters['pokemon/isLoadingEvolution'],
    set: (value) => {
      store.commit('pokemon/SET_IS_LOADING_EVOLUTION', value)
    }
  })
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

  const getPokemonById = async () => {
    // Validate route param id exist
    if (!route.params.id) return

    // Get pokemon id from route params
    const pokemonId = Number.parseInt(route.params.id)

    // Validate pokemon id must between 1 and pokemonCount
    if (validatePokemonRoute(pokemonId)) {
      router.replace({ name: 'pokedexInfo', params: { id: 1 } })
      return
    }

    // Call get pokemon by id API
    try {
      await store.dispatch('pokemon/getPokemonById', pokemonId)
    } catch (error) {
      console.error(error)
    }

    // Reset pokemon form selected to default
    if (pokemonVarietiesCount.value) {
      pokemonFormSelected.value = pokemonVarietyOptions.value[0].value
    }

    // Set document title
    document.title = `${capitalize(pokemonName.value)} - Pokédex`
  }

  const getPokemonEvolutionChain = async () => {
    pokemonIsLoadingEvolution.value = true
    try {
      await store.dispatch('pokemon/getPokemonEvolutionChain')
    } catch (error) {
      console.error(error)
    } finally {
      pokemonIsLoadingEvolution.value = false
    }
  }

  const getPokemonFormById = async (id = 1) => {
    try {
      await store.dispatch('pokemon/getPokemonFormById', id)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    calculatePokemonBaseStatPercentage,
    getPokemonById,
    getPokemonEvolutionChain,
    getPokemonFormById,
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
    pokemonIsLoading,
    pokemonIsLoadingEvolution,
    pokemonName,
    pokemonSwiper,
    pokemonTypes,
    pokemonVarietiesCount,
    pokemonVarietyOptions,
    pokemonWeight
  }
}
