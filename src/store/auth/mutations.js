export function SET_ACCESS_TOKEN (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.accessToken = payload
  } else {
    state.accessToken = ''
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
