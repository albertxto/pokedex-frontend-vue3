export function SET_ABOUT (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.about = payload
  } else {
    state.about = ''
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
