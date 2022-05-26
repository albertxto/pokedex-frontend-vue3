import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'

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
