import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'

export function getPokemonById ({ commit }, id) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.POKEDEX}/${id}`)
    .then((response) => {
      const { data } = response

      // Basic info
      if (data[0]?.id) commit('SET_ID', data[0].id)
      if (data[0]?.species?.name) commit('SET_NAME', data[0].species.name)
      if (data[0]?.sprites?.other['official-artwork']?.front_default) {
        commit('SET_IMAGE', data[0].sprites.other['official-artwork'].front_default)
      }
      if (data[0]?.types?.length) {
        const types = data[0].types.map((pokemonType) => pokemonType.type.name)
        commit('SET_TYPES', types)
      }

      // About
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

      // Measurement
      if (data[0]?.height) commit('SET_HEIGHT', data[0].height)
      if (data[0]?.weight) commit('SET_WEIGHT', data[0].weight)

      // Gender
      if (typeof data[1]?.gender_rate === 'number') commit('SET_GENDER_RATE', data[1]?.gender_rate)

      // Egg Groups
      if (data[1]?.egg_groups.length) {
        const eggGroups = data[1].egg_groups.map((eggGroup) => eggGroup.name)
        commit('SET_EGG_GROUPS', eggGroups)
      }

      // Training
      if (data[0]?.base_experience) commit('SET_BASE_EXPERIENCE', data[0].base_experience)
      if (data[1]?.base_happiness) commit('SET_BASE_HAPPINESS', data[1].base_happiness)

      // Base Stats
      if (data[0]?.stats?.length) {
        const baseStats = data[0].stats.map((status) => {
          return {
            label: status.stat.name,
            value: status.base_stat
          }
        })
        commit('SET_BASE_STATS', baseStats)
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
