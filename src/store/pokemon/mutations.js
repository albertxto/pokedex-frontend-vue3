import {
  getIdFromPokeApiUrl, getPokemonImageUrlById, normalizePokeApiName
} from '@/utils/stringFormat'

export function PUSH_EVOLUTION (state, payload) {
  if (typeof payload === 'object') {
    state.evolutions.push(payload)
  }
}

export function SET_EVOLUTIONS (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.evolutions = payload
  } else {
    state.evolutions = []
  }
}

export function SET_FORM_SELECTED (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.formSelected = payload
  } else {
    state.formSelected = null
  }
}

export function SET_IS_LOADING (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoading = payload
  } else {
    state.isLoading = false
  }
}

export function SET_IS_LOADING_EVOLUTION (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoadingEvolution = payload
  } else {
    state.isLoadingEvolution = false
  }
}

export function SET_POKEMON (state, payload) {
  // Base experience
  state.baseExperience = payload.base_experience

  // Base stats
  state.baseStats = payload.stats.map((status) => ({
    label: status.stat.name,
    value: status.base_stat
  }))

  // Measurement
  state.height = payload.height
  state.weight = payload.weight

  // Name
  state.name = normalizePokeApiName(payload.name)

  // Types
  state.types = payload.types.map((pokemonType) => pokemonType.type.name)
}

export function SET_POKEMON_SPECIES (state, payload) {
  // About
  state.about = payload.flavor_text_entries.find((flavorText) => (
    flavorText.language.name === 'en' &&
      (flavorText.version.name === 'sword' ||
      flavorText.version.name === 'shield' ||
      flavorText.version.name === 'ultra-sun' ||
      flavorText.version.name === 'ultra-moon' ||
      flavorText.version.name === 'x' ||
      flavorText.version.name === 'y')
  )).flavor_text

  // Base happiness
  state.baseHappiness = payload.base_happiness

  // Egg groups
  state.eggGroups = payload.egg_groups.map((eggGroup) => eggGroup.name)

  // Evolution chain ID
  state.evolutionChainId = Number.parseInt(getIdFromPokeApiUrl(payload.evolution_chain.url))

  // Gender
  state.genderRate = payload.gender_rate

  // Genus
  state.genus = payload.genera.find((genera) => genera.language.name === 'en').genus

  // Varieties
  state.varieties = payload.varieties.map((variety) => {
    const pokemonId = getIdFromPokeApiUrl(variety.pokemon.url)
    return {
      isDefault: variety.is_default,
      id: pokemonId,
      image: getPokemonImageUrlById(pokemonId),
      name: normalizePokeApiName(variety.pokemon.name)
    }
  })
}

export function SET_SWIPER (state, payload) {
  state.swiper = payload
}
