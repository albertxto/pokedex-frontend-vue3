import { count as pokemonCount, limit as pokemonLimit } from '@/config/pokemon'
import { pokeApiInstance } from '@/plugins/pokeapi'
import {
  getIdFromPokeApiUrl, getPokemonImageUrlById, pokedexNumberFormat
} from '@/utils/stringFormat'

export function getPokemonList ({ commit, getters }, nextPage = false) {
  commit('SET_IS_LOADING_BUTTON', true)

  if (!nextPage) {
    commit('SET_IS_LOADING_FIELD', true)
    commit('SET_LIST', [])
    commit('SET_OFFSET', 0)
  }

  const { offset } = getters

  return new Promise((resolve, reject) => pokeApiInstance
    .getPokemonsList({ limit: pokemonLimit, offset })
    .then((response) => {
      const { results } = response

      if (results.length) {
        // Validate results cannot be greater than pokemon count in config file
        if (offset + results.length > pokemonCount) {
          const startIndex = getIdFromPokeApiUrl(results[0].url) - 1
          const spliceIndex = pokemonCount - startIndex
          results.splice(spliceIndex, results.length - spliceIndex)
        }

        const list = results.map((result) => {
          const pokemonId = getIdFromPokeApiUrl(result.url)
          return {
            id: pokemonId,
            image: getPokemonImageUrlById(pokemonId),
            name: result.name,
            number: pokedexNumberFormat(pokemonId)
          }
        })

        commit('PUSH_LIST', list)

        if (results.length === pokemonLimit) {
          commit('SET_OFFSET', offset + pokemonLimit)
          commit('SET_IS_LOAD_MORE', true)
        } else {
          commit('SET_IS_LOAD_MORE', false)
        }
      } else {
        commit('SET_IS_LOAD_MORE', false)
      }

      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
    .finally(() => {
      commit('SET_IS_LOADING_BUTTON', false)
      if (!nextPage) {
        commit('SET_IS_LOADING_FIELD', false)
      }
    })
  )
}
