export function accessToken (state) {
  return state.accessToken
}

export function currentUser (state) {
  return state.currentUser
}

export function isAuthenticated (state) {
  return !!state.accessToken
}

export function isLoading (state) {
  return state.isLoading
}

export function isRetryToken (state) {
  return state.isRetryToken
}

export function refreshToken (state) {
  return state.refreshToken
}
