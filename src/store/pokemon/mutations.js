export function PUSH_EVOLUTION (state, payload) {
  if (typeof payload === 'object') {
    state.evolutions.push(payload)
  }
}

export function SET_ABOUT (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.about = payload
  } else {
    state.about = ''
  }
}

export function SET_BASE_EXPERIENCE (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.baseExperience = payload
  } else {
    state.baseExperience = 0
  }
}

export function SET_BASE_HAPPINESS (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.baseHappiness = payload
  } else {
    state.baseHappiness = 0
  }
}

export function SET_BASE_STATS (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.baseStats = payload
  } else {
    state.baseStats = []
  }
}

export function SET_EGG_GROUPS (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.eggGroups = payload
  } else {
    state.eggGroups = []
  }
}

export function SET_EVOLUTION_CHAIN_ID (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.evolutionChainId = payload
  } else {
    state.evolutionChainId = 0
  }
}

export function SET_EVOLUTIONS (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.evolutions = payload
  } else {
    state.evolutions = []
  }
}

export function SET_GENDER_RATE (state, payload) {
  if (typeof payload === 'number') {
    state.genderRate = payload
  } else {
    state.genderRate = -1
  }
}

export function SET_GENUS (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.genus = payload
  } else {
    state.genus = ''
  }
}

export function SET_HEIGHT (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.height = payload
  } else {
    state.height = 0
  }
}

export function SET_ID (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.id = payload
  } else {
    state.id = ''
  }
}

export function SET_IMAGE (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.image = payload
  } else {
    state.image = ''
  }
}

export function SET_IS_LOADING (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoading = payload
  } else {
    state.isLoading = false
  }
}

export function SET_IS_LOADING_EVOLUTION (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoadingEvolution = payload
  } else {
    state.isLoadingEvolution = false
  }
}

export function SET_NAME (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.name = payload
  } else {
    state.name = ''
  }
}

export function SET_TYPES (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.types = payload
  } else {
    state.types = []
  }
}

export function SET_WEIGHT (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.weight = payload
  } else {
    state.weight = 0
  }
}
