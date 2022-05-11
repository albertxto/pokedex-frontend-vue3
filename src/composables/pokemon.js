import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { getIdFromPokeApiUrl } from '@/utils/stringFormat'

export const usePokemon = () => {
  const route = useRoute()
  const store = useStore()

  // Computed
  const pokemonAbout = computed(() => store.getters['pokemon/about'])
  const pokemonBaseExperience = computed(() => store.getters['pokemon/baseExperience'])
  const pokemonBaseHappiness = computed(() => store.getters['pokemon/baseHappiness'])
  const pokemonBaseStats = computed(() => store.getters['pokemon/baseStats'])
  const pokemonEggGroups = computed(() => store.getters['pokemon/eggGroups'])
  const pokemonEvolutions = computed(() => store.getters['pokemon/evolutions'])
  const pokemonGenders = computed(() => store.getters['pokemon/genders'])
  const pokemonGenus = computed(() => store.getters['pokemon/genus'])
  const pokemonHeight = computed(() => store.getters['pokemon/height'])
  const pokemonId = computed(() => store.getters['pokemon/id'])
  const pokemonIsLoading = computed(() => store.getters['pokemon/isLoading'])
  const pokemonIsLoadingEvolution = computed(() => store.getters['pokemon/isLoadingEvolution'])
  const pokemonName = computed(() => store.getters['pokemon/name'])
  const pokemonTypes = computed(() => store.getters['pokemon/types'])
  const pokemonWeight = computed(() => store.getters['pokemon/weight'])

  // Method
  const calculatePokemonBaseStatPercentage = (stat = 0) => {
    return Number.parseFloat((stat * 100 / 255).toFixed(2))
  }

  const getPokemonById = async () => {
    store.commit('pokemon/SET_IS_LOADING', true)
    try {
      const response = await store.dispatch('pokemon/getPokemonById', route.params.id)
      if (response.length) {
        // Basic info
        if (response[0]?.id) store.commit('pokemon/SET_ID', response[0].id)
        if (response[0]?.species?.name) store.commit('pokemon/SET_NAME', response[0].species.name)
        if (response[0]?.sprites?.other['official-artwork']?.front_default) {
          store.commit('pokemon/SET_IMAGE', response[0].sprites.other['official-artwork'].front_default)
        }
        if (response[0]?.types?.length) {
          const types = response[0].types.map((pokemonType) => pokemonType.type.name)
          store.commit('pokemon/SET_TYPES', types)
        }
        if (response[1]?.genera.length) {
          const genus = response[1].genera.find((genera) => genera.language.name === 'en').genus
          store.commit('pokemon/SET_GENUS', genus)
        }

        // About
        if (response[1]?.flavor_text_entries.length) {
          const about = response[1].flavor_text_entries.find((flavorText) => (
            flavorText.language.name === 'en' &&
              (flavorText.version.name === 'sword' ||
              flavorText.version.name === 'shield' ||
              flavorText.version.name === 'x' ||
              flavorText.version.name === 'y')
          )).flavor_text
          if (about) store.commit('pokemon/SET_ABOUT', about)
        }

        // Measurement
        if (response[0]?.height) store.commit('pokemon/SET_HEIGHT', response[0].height)
        if (response[0]?.weight) store.commit('pokemon/SET_WEIGHT', response[0].weight)

        // Gender
        if (typeof response[1]?.gender_rate === 'number') {
          store.commit('pokemon/SET_GENDER_RATE', response[1]?.gender_rate)
        }

        // Egg groups
        if (response[1]?.egg_groups.length) {
          const eggGroups = response[1].egg_groups.map((eggGroup) => eggGroup.name)
          store.commit('pokemon/SET_EGG_GROUPS', eggGroups)
        }

        // Training
        if (response[0]?.base_experience) {
          store.commit('pokemon/SET_BASE_EXPERIENCE', response[0].base_experience)
        }
        if (response[1]?.base_happiness) {
          store.commit('pokemon/SET_BASE_HAPPINESS', response[1].base_happiness)
        }

        // Base stats
        if (response[0]?.stats?.length) {
          const baseStats = response[0].stats.map((status) => {
            return {
              label: status.stat.name,
              value: status.base_stat
            }
          })
          store.commit('pokemon/SET_BASE_STATS', baseStats)
        }

        // Evolution chain
        if (response[1]?.evolution_chain?.url) {
          store.commit('pokemon/SET_EVOLUTION_CHAIN_ID', Number.parseInt(
            getIdFromPokeApiUrl(response[1].evolution_chain.url)
          ))
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      store.commit('pokemon/SET_IS_LOADING', false)
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
    pokemonAbout,
    pokemonBaseExperience,
    pokemonBaseHappiness,
    pokemonBaseStats,
    pokemonEggGroups,
    pokemonEvolutions,
    pokemonGenders,
    pokemonGenus,
    pokemonHeight,
    pokemonId,
    pokemonIsLoading,
    pokemonIsLoadingEvolution,
    pokemonName,
    pokemonTypes,
    pokemonWeight
  }
}
