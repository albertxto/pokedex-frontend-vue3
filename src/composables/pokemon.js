import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export const usePokemon = () => {
  const route = useRoute()
  const store = useStore()

  // Computed
  const pokemonAbout = computed(() => store.getters['pokemon/about'])
  const pokemonBaseExperience = computed(() => store.getters['pokemon/baseExperience'])
  const pokemonBaseHappiness = computed(() => store.getters['pokemon/baseHappiness'])
  const pokemonBaseStats = computed(() => store.getters['pokemon/baseStats'])
  const pokemonEggGroups = computed(() => store.getters['pokemon/eggGroups'])
  const pokemonGenders = computed(() => store.getters['pokemon/genders'])
  const pokemonHeight = computed(() => store.getters['pokemon/height'])
  const pokemonWeight = computed(() => store.getters['pokemon/weight'])

  // Method
  const calculatePokemonBaseStatPercentage = (stat = 0) => (stat * 100 / 255).toFixed(2)

  const getPokemonById = () => {
    try {
      store.dispatch('pokemon/getPokemonById', route.params.id)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    calculatePokemonBaseStatPercentage,
    getPokemonById,
    pokemonAbout,
    pokemonBaseExperience,
    pokemonBaseHappiness,
    pokemonBaseStats,
    pokemonEggGroups,
    pokemonGenders,
    pokemonHeight,
    pokemonWeight
  }
}
