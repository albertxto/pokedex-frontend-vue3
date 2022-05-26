import { count as pokemonCount } from '@/config/pokemon'

export const validatePokemonRoute = (pokemonId = '') => {
  if (!pokemonId || isNaN(pokemonId) || Number.parseInt(pokemonId) < 1 || Number.parseInt(pokemonId) > pokemonCount) {
    return false
  }

  return true
}
