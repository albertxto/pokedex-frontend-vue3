export function SET_EMAIL (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.email = payload
  } else {
    state.email = ''
  }
}

export function SET_ID (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.id = payload
  } else {
    state.id = ''
  }
}

export function SET_IS_EMAIL_VERIFIED (state, payload) {
  if (typeof payload === 'boolean') {
    state.isEmailVerified = payload
  } else {
    state.isEmailVerified = false
  }
}

export function SET_IS_LOADING (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoading = payload
  } else {
    state.isLoading = false
  }
}

export function SET_LIST (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.list = payload
  } else {
    state.list = []
  }
}

export function SET_NAME (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.name = payload
  } else {
    state.name = ''
  }
}

export function SET_ROLE (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.role = payload
  } else {
    state.role = ''
  }
}
