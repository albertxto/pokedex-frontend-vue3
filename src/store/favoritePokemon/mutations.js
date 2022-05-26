export function PUSH_LIST (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.list.push(...payload)
  }
}

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

export function SET_IS_LOAD_MORE (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoadMore = payload
  } else {
    state.isLoadMore = false
  }
}

export function SET_IS_SHOW_MODAL (state, payload) {
  if (typeof payload === 'boolean') {
    state.isShowModal = payload
  } else {
    state.isShowModal = false
  }
}

export function SET_LIST (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.list = payload
  } else {
    state.list = []
  }
}

export function SET_LIST_COUNT (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.listCount = payload
  } else {
    state.listCount = 0
  }
}

export function SET_PAGE (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.page = payload
  } else {
    state.page = 1
  }
}
