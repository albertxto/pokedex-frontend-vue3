export function SET_DARK_MODE (state, payload) {
  if (typeof payload === 'boolean') {
    state.darkMode = payload
  } else {
    state.darkMode = false
  }
}
