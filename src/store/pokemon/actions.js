import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'
import {
  getIdFromPokeApiUrl, getPokemonImageUrlById, normalizePokeApiName
} from '@/utils/stringFormat'

export function getPokemonById ({ commit }, id) {
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.POKEDEX}/${id}`)
    .then((response) => {
      if (response.data?.length) {
        const { data } = response

        // Basic info
        if (data[0]?.id) commit('SET_ID', data[0].id)
        if (data[0]?.name) commit('SET_NAME', normalizePokeApiName(data[0].name))
        if (data[0]?.sprites?.other['official-artwork']?.front_default) {
          commit('SET_IMAGE', data[0].sprites.other['official-artwork'].front_default)
        }
        if (data[0]?.types?.length) {
          const types = data[0].types.map((pokemonType) => pokemonType.type.name)
          commit('SET_TYPES', types)
        }
        if (data[1]?.genera.length) {
          const genus = data[1].genera.find((genera) => genera.language.name === 'en').genus
          commit('SET_GENUS', genus)
        }

        // About
        if (data[1]?.flavor_text_entries.length) {
          const about = data[1].flavor_text_entries.find((flavorText) => (
            flavorText.language.name === 'en' &&
              (flavorText.version.name === 'sword' ||
              flavorText.version.name === 'shield' ||
              flavorText.version.name === 'sun' ||
              flavorText.version.name === 'moon' ||
              flavorText.version.name === 'ultra-sun' ||
              flavorText.version.name === 'ultra-moon' ||
              flavorText.version.name === 'x' ||
              flavorText.version.name === 'y')
          )).flavor_text
          if (about) commit('SET_ABOUT', about)
        }

        // Measurement
        if (data[0]?.height) commit('SET_HEIGHT', data[0].height)
        if (data[0]?.weight) commit('SET_WEIGHT', data[0].weight)

        // Gender
        if (typeof data[1]?.gender_rate === 'number') {
          commit('SET_GENDER_RATE', data[1]?.gender_rate)
        }

        // Egg groups
        if (data[1]?.egg_groups.length) {
          const eggGroups = data[1].egg_groups.map((eggGroup) => eggGroup.name)
          commit('SET_EGG_GROUPS', eggGroups)
        }

        // Training
        if (data[0]?.base_experience) {
          commit('SET_BASE_EXPERIENCE', data[0].base_experience)
        }
        if (data[1]?.base_happiness) {
          commit('SET_BASE_HAPPINESS', data[1].base_happiness)
        }

        // Base stats
        if (data[0]?.stats?.length) {
          const baseStats = data[0].stats.map((status) => ({
            label: status.stat.name,
            value: status.base_stat
          }))
          commit('SET_BASE_STATS', baseStats)
        }

        // Evolution chain
        if (data[1]?.evolution_chain?.url) {
          commit('SET_EVOLUTION_CHAIN_ID', Number.parseInt(
            getIdFromPokeApiUrl(data[1].evolution_chain.url)
          ))
        }

        // Varieties
        if (data[1]?.varieties?.length) {
          const varieties = data[1]?.varieties.map((variety) => {
            const pokemonId = getIdFromPokeApiUrl(variety.pokemon.url)
            return {
              isDefault: variety.is_default,
              id: pokemonId,
              image: getPokemonImageUrlById(pokemonId),
              name: normalizePokeApiName(variety.pokemon.name)
            }
          })
          commit('SET_VARIETIES', varieties)
        }
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

export function getPokemonEvolutionChain ({ commit, dispatch, getters }) {
  commit('SET_EVOLUTIONS', [])
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

export function getPokemonFormById ({ commit }, id) {
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.POKEMON_FORM}/${id}`)
    .then((response) => {
      const { data } = response

      // Basic info
      if (data?.name) commit('SET_NAME', normalizePokeApiName(data.name))
      if (data?.sprites?.other['official-artwork']?.front_default) {
        commit('SET_IMAGE', data.sprites.other['official-artwork'].front_default)
      }
      if (data?.types?.length) {
        const types = data.types.map((pokemonType) => pokemonType.type.name)
        commit('SET_TYPES', types)
      }

      // Measurement
      if (data?.height) commit('SET_HEIGHT', data.height)
      if (data?.weight) commit('SET_WEIGHT', data.weight)

      // Training
      if (data?.base_experience) {
        commit('SET_BASE_EXPERIENCE', data.base_experience)
      }

      // Base stats
      if (data?.stats?.length) {
        const baseStats = data.stats.map((status) => ({
          label: status.stat.name,
          value: status.base_stat
        }))
        commit('SET_BASE_STATS', baseStats)
      }

      resolve(data)
    })
    .catch((error) => {
      reject(error)
    })
  )
}

export function setPokemonEvolution ({ commit, dispatch }, payload) {
  if (payload?.evolves_to?.length) {
    const pokemonIdEvolveFrom = getIdFromPokeApiUrl(payload?.species?.url)

    payload?.evolves_to?.forEach((evolve) => {
      const pokemonIdEvolveTo = getIdFromPokeApiUrl(evolve?.species?.url)

      // Evolution details
      const evolutionDetails = []
      evolve?.evolution_details?.forEach((evolutionDetail) => {
        // Level up
        if (evolutionDetail?.min_level) {
          evolutionDetails.push(`level ${evolutionDetail.min_level}`)
        }
        // Friendship
        if (evolutionDetail?.min_happiness) {
          evolutionDetails.push('high friendship')
        }
        // Affection
        if (evolutionDetail?.min_affection) {
          evolutionDetails.push('affection in pokemon amie')
        }
        // Min beauty
        if (evolutionDetail?.min_beauty) {
          evolutionDetails.push(`level up with min beauty ${evolutionDetail.min_beauty}`)
        }
        // Time of day
        if (evolutionDetail?.time_of_day === 'day') {
          evolutionDetails.push('day time')
        } else if (evolutionDetail?.time_of_day === 'night') {
          evolutionDetails.push('night time')
        }
        // Use item
        if (evolutionDetail?.item?.name) {
          evolutionDetails.push(`use ${normalizePokeApiName(evolutionDetail.item.name)}`)
        }
        // Gender specific
        if (evolutionDetail?.gender === 1) {
          evolutionDetails.push('female')
        } else if (evolutionDetail?.gender === 2) {
          evolutionDetails.push('male')
        }
        // During rain
        if (evolutionDetail?.needs_overworld_rain) {
          evolutionDetails.push('during rain')
        }
        // Party species
        if (evolutionDetail?.party_species?.name) {
          evolutionDetails.push(
            `with ${normalizePokeApiName(evolutionDetail.party_species.name)} in party`
          )
        }
        // Party type
        if (evolutionDetail?.party_type?.name) {
          evolutionDetails.push(`${evolutionDetail.party_type.name} type pokemon in party`)
        }
        // Relative physical stats
        if (evolutionDetail?.relative_physical_stats === 1) {
          evolutionDetails.push('attack > defense')
        } else if (evolutionDetail?.relative_physical_stats === -1) {
          evolutionDetails.push('attack < defense')
        } else if (evolutionDetail?.relative_physical_stats === 0) {
          evolutionDetails.push('attack = defense')
        }
        // Level up near certain location
        if (evolutionDetail?.location?.name) {
          evolutionDetails.push(
            `level up near ${normalizePokeApiName(evolutionDetail.location.name)}`
          )
        }
        // Level up while knowing certain move
        if (evolutionDetail?.known_move?.name) {
          evolutionDetails.push(
            `level up while knowing ${normalizePokeApiName(evolutionDetail.known_move.name)}`
          )
        }
        // Turn upside down
        if (evolutionDetail?.turn_upside_down) {
          evolutionDetails.push('holding console upside down')
        }
        // Trigger
        if (evolutionDetail?.trigger?.name === 'trade') {
          evolutionDetails.push('trade')
        } else if (evolutionDetail?.trigger?.name === 'shed') {
          evolutionDetails.push('has a spare slot in the party and extra pokeball')
        } else if (evolutionDetail?.trigger?.name === 'spin') {
          evolutionDetails.push('trainer spins and strikes a pose')
        } else if (evolutionDetail?.trigger?.name === 'take-damage') {
          evolutionDetails.push('take damage')
        } else if (evolutionDetail?.trigger?.name === 'three-critical-hits') {
          evolutionDetails.push('landing 3 critical hits in a single battle')
        } else if (evolutionDetail?.trigger?.name === 'tower-of-darkness') {
          evolutionDetails.push('shown the scroll in the tower of darkness')
        } else if (evolutionDetail?.trigger?.name === 'tower-of-waters') {
          evolutionDetails.push('shown the scroll in the tower of waters')
        }
        // Holding item
        if (evolutionDetail?.held_item?.name) {
          evolutionDetails.push(
            `while holding ${normalizePokeApiName(evolutionDetail.held_item.name)}`
          )
        }
        // Trade species
        if (evolutionDetail?.trade_species?.name) {
          evolutionDetails.push(`with ${normalizePokeApiName(evolutionDetail.trade_species.name)}`)
        }
      })

      commit('PUSH_EVOLUTION', {
        detail: evolutionDetails.length ? `(${evolutionDetails.join(', ')})` : '',
        fromId: pokemonIdEvolveFrom,
        fromImage: getPokemonImageUrlById(pokemonIdEvolveFrom),
        fromName: normalizePokeApiName(payload?.species?.name) || '',
        toId: pokemonIdEvolveTo,
        toImage: getPokemonImageUrlById(pokemonIdEvolveTo),
        toName: normalizePokeApiName(evolve?.species?.name) || ''
      })

      // Call recursive function
      dispatch('setPokemonEvolution', evolve)
    })
  }
}
