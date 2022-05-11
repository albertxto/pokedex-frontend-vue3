import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'
import { getIdFromPokeApiUrl, getPokemonImageUrlById } from '@/utils/stringFormat'

export function getPokemonById (_store, id) {
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.POKEDEX}/${id}`)
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
  )
}

export function getPokemonEvolutionChain ({ dispatch, getters }) {
  const { evolutionChainId } = getters

  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.EVOLUTION_CHAIN}/${evolutionChainId}`)
    .then((response) => {
      const { chain } = response.data
      dispatch('setPokemonEvolution', chain)
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
  )
}

export function setPokemonEvolution ({ commit, dispatch, getters }, payload) {
  if (payload?.evolves_to?.length) {
    const pokemonIdEvolveFrom = getIdFromPokeApiUrl(payload?.species?.url)

    payload.evolves_to.forEach(async (evolve) => {
      const pokemonIdEvolveTo = getIdFromPokeApiUrl(evolve?.species?.url)

      // Evolution details
      const evolutionDetail = []
      // Level up
      if (evolve?.evolution_details[0]?.min_level) {
        evolutionDetail.push(`level ${evolve.evolution_details[0].min_level}`)
      }
      // Friendship
      if (evolve?.evolution_details[0]?.min_happiness) {
        evolutionDetail.push('high friendship')
      }
      // Affection
      if (evolve?.evolution_details[0]?.min_affection) {
        evolutionDetail.push('affection in pokemon amie')
      }
      // Time of day
      if (evolve?.evolution_details[0]?.time_of_day === 'day') {
        evolutionDetail.push('day time')
      } else if (evolve?.evolution_details[0]?.time_of_day === 'night') {
        evolutionDetail.push('night time')
      }
      // Use item
      if (evolve?.evolution_details[0]?.item?.name) {
        evolutionDetail.push(`use ${evolve.evolution_details[0].item.name.replaceAll('-', ' ')}`)
      }
      // Gender specific
      if (evolve?.evolution_details[0]?.gender === 1) {
        evolutionDetail.push('female')
      } else if (evolve?.evolution_details[0]?.gender === 2) {
        evolutionDetail.push('male')
      }
      // Level up near location
      if (evolve?.evolution_details[0]?.location?.name) {
        evolutionDetail.push(`level up near ${evolve.evolution_details[0].location.name.replaceAll('-', ' ')}`)
      }
      // Turn upside down
      if (evolve?.evolution_details[0]?.turn_upside_down) {
        evolutionDetail.push('holding console upside down')
      }
      // Trade
      if (evolve?.evolution_details[0]?.trigger?.name === 'trade') {
        evolutionDetail.push('trade')
      }
      // Holding item
      if (evolve?.evolution_details[0]?.held_item?.name) {
        evolutionDetail.push(`while holding ${evolve.evolution_details[0].held_item.name.replaceAll('-', ' ')}`)
      }

      commit('PUSH_EVOLUTION', {
        detail: evolutionDetail.length ? `(${evolutionDetail.join(', ')})` : '',
        fromId: pokemonIdEvolveFrom,
        fromImage: getPokemonImageUrlById(pokemonIdEvolveFrom),
        fromName: payload?.species?.name || '',
        toId: pokemonIdEvolveTo,
        toImage: getPokemonImageUrlById(pokemonIdEvolveTo),
        toName: evolve?.species?.name || ''
      })

      // Call recursive function
      dispatch('setPokemonEvolution', evolve)
    })
  }
}
