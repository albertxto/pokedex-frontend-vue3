export function about (state) {
  return state.about
}

export function baseExperience (state) {
  return state.baseExperience
}

export function baseHappiness (state) {
  return state.baseHappiness
}

export function baseStats (state) {
  return state.baseStats
}

export function eggGroups (state) {
  return state.eggGroups.join(', ')
}

export function evolutionChainId (state) {
  return state.evolutionChainId
}

export function evolutions (state) {
  return state.evolutions
}

export function genders (state) {
  const genderRate = state.genderRate
  switch (genderRate) {
    case 0:
      return [
        {
          label: 'MALE',
          value: '100%'
        },
        {
          label: 'FEMALE',
          value: '0%'
        }
      ]
    case 1:
      return [
        {
          label: 'MALE',
          value: '87.5%'
        },
        {
          label: 'FEMALE',
          value: '12.5%'
        }
      ]
    case 2:
      return [
        {
          label: 'MALE',
          value: '75%'
        },
        {
          label: 'FEMALE',
          value: '25%'
        }
      ]
    case 4:
      return [
        {
          label: 'MALE',
          value: '50%'
        },
        {
          label: 'FEMALE',
          value: '50%'
        }
      ]
    case 6:
      return [
        {
          label: 'MALE',
          value: '25%'
        },
        {
          label: 'FEMALE',
          value: '75%'
        }
      ]
    case 7:
      return [
        {
          label: 'MALE',
          value: '12.5%'
        },
        {
          label: 'FEMALE',
          value: '87.5%'
        }
      ]
    case 8:
      return [
        {
          label: 'MALE',
          value: '0%'
        },
        {
          label: 'FEMALE',
          value: '100%'
        }
      ]
    default:
      return 'Genderless'
  }
}

export function genderRate (state) {
  return state.genderRate
}

export function genus (state) {
  return state.genus
}

export function height (state) {
  return `${state.height * 10} cm`
}

export function id (state) {
  return `#${state.id.toString().padStart(3, '0')}`
}

export function image (state) {
  return state.image
}

export function isFavorite (state) {
  return state.isFavorite
}

export function isLoading (state) {
  return state.isLoading
}

export function isLoadingEvolution (state) {
  return state.isLoadingEvolution
}

export function isShowModal (state) {
  return state.isShowModal
}

export function name (state) {
  return state.name
}

export function swiper (state) {
  return state.swiper
}

export function types (state) {
  return state.types
}

export function weight (state) {
  return `${state.weight / 10} kg`
}
