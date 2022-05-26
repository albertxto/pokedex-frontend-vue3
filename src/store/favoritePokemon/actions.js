import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'
import { limit } from '@/config/favoritePokemon'
import { getPokemonImageUrlById, pokedexNumberFormat } from '@/utils/stringFormat'

export function getFavoritePokemon ({ commit }, pokemonId = '') {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.FAVORITE_POKEMON}/${pokemonId}`)
    .then((response) => {
      if (response?.data?.isFavorite) {
        commit('SET_IS_FAVORITE', true)
      } else {
        commit('SET_IS_FAVORITE', false)
      }
      resolve(response.data)
    })
    .catch((error) => {
      commit('SET_IS_FAVORITE', false)
      reject(error)
    })
    .finally(() => {
      commit('SET_IS_LOADING', false)
    })
  )
}

export function getFavoritePokemonList ({ commit, getters }, nextPage = false) {
  commit('SET_IS_LOADING', true)

  if (!nextPage) {
    commit('SET_LIST', [])
    commit('SET_PAGE', 1)
  }

  const { page } = getters

  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.FAVORITE_POKEMON_LIST}/?limit=${limit}&page=${page}`)
    .then((response) => {
      const { results } = response.data

      if (results.length) {
        const list = results.map((result) => ({
          id: result.pokemon,
          image: getPokemonImageUrlById(result.pokemon),
          number: pokedexNumberFormat(result.pokemon)
        }))
        commit('PUSH_LIST', list)

        if (results.length === limit) {
          commit('SET_PAGE', page + 1)
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
      commit('SET_IS_LOADING', false)
    })
  )
}

export function setFavoritePokemon ({ commit, getters }, pokemonId = '') {
  commit('SET_IS_LOADING', true)
  const { isFavorite } = getters
  return new Promise((resolve, reject) => axiosInstance
    .post(`${endpoints.FAVORITE_POKEMON}/${pokemonId}`)
    .then((response) => {
      commit('SET_IS_FAVORITE', !isFavorite)
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
    .finally(() => {
      commit('SET_IS_LOADING', false)
    })
  )
}
