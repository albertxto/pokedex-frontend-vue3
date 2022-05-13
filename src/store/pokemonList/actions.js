import endpoints from '@/config/endpoints'
import { limit } from '@/config/pokemon'
import { axiosInstance } from '@/plugins/axios'
import { getIdFromPokeApiUrl, getPokemonImageUrlById } from '@/utils/stringFormat'

export function getPokemonList ({ commit, getters }, nextPage = false) {
  commit('SET_IS_LOADING', true)

  if (!nextPage) {
    commit('SET_LIST', [])
    commit('SET_OFFSET', 0)
  }

  const { offset } = getters

  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.POKEDEX}/?limit=${limit}&offset=${offset}`)
    .then((response) => {
      const { results } = response.data

      if (results.length) {
        const list = results.map((result) => {
          const pokemonId = getIdFromPokeApiUrl(result.url)
          return {
            id: pokemonId,
            image: getPokemonImageUrlById(pokemonId),
            name: result.name
          }
        })

        commit('PUSH_LIST', list)

        if (results.length === limit) {
          commit('SET_OFFSET', offset + limit)
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
      commit('SET_IS_LOAD_MORE', false)
      reject(error)
    })
    .finally(() => {
      commit('SET_IS_LOADING', false)
    })
  )
}
