export function SET_ACCESS_TOKEN (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.accessToken = payload
  } else {
    state.accessToken = ''
  }
}

export function SET_CURRENT_USER_EMAIL (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.currentUser.email = payload
  } else {
    state.currentUser.email = ''
  }
}

export function SET_CURRENT_USER_ID (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.currentUser.id = payload
  } else {
    state.currentUser.id = ''
  }
}

export function SET_CURRENT_USER_NAME (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.currentUser.name = payload
  } else {
    state.currentUser.name = ''
  }
}

export function SET_CURRENT_USER_ROLE (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.currentUser.role = payload
  } else {
    state.currentUser.role = ''
  }
}

export function SET_IS_LOADING (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoading = payload
  } else {
    state.isLoading = false
  }
}

export function SET_REFRESH_TOKEN (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.refreshToken = payload
  } else {
    state.refreshToken = ''
  }
}
