export function SET_IS_FAVORITE (state, payload) {
  if (typeof payload === 'boolean') {
    state.isFavorite = payload
  } else {
    state.isFavorite = false
  }
}

export function SET_IS_LOADING (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoading = payload
  } else {
    state.isLoading = false
  }
}

export function SET_IS_SHOW_MODAL (state, payload) {
  if (typeof payload === 'boolean') {
    state.isShowModal = payload
  } else {
    state.isShowModal = false
  }
}
