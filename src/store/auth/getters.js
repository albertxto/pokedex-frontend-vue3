export function accessToken (state) {
  return state.accessToken
}

export function isAuthenticated (state) {
  return !!state.accessToken
}

export function isLoading (state) {
  return state.isLoading
}

export function refreshToken (state) {
  return state.refreshToken
}
