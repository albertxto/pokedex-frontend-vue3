import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'

export function getPokemonById ({ commit }, id) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.POKEDEX}/${id}`)
    .then((response) => {
      const { data } = response
      if (data[0]?.id) commit('SET_ID', data[0].id)
      if (data[0]?.species?.name) commit('SET_NAME', data[0].species.name)
      if (data[0]?.sprites?.other['official-artwork']?.front_default) {
        commit('SET_IMAGE', data[0].sprites.other['official-artwork'].front_default)
      }
      if (data[0]?.types?.length) {
        const types = data[0].types.map((pokemonType) => pokemonType.type.name)
        commit('SET_TYPES', types)
      }
      if (data[1]?.flavor_text_entries.length) {
        const about = data[1].flavor_text_entries.find((flavorText) => (
          flavorText.language.name === 'en' &&
            (flavorText.version.name === 'sword' ||
            flavorText.version.name === 'shield' ||
            flavorText.version.name === 'x' ||
            flavorText.version.name === 'y')
        )).flavor_text
        if (about) commit('SET_ABOUT', about)
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
