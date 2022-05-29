export function PUSH_LIST (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.list.push(...payload)
  }
}

export function SET_IS_LOADING_BUTTON (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoadingButton = payload
  } else {
    state.isLoadingButton = false
  }
}

export function SET_IS_LOADING_FIELD (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoadingField = payload
  } else {
    state.isLoadingField = false
  }
}

export function SET_IS_LOAD_MORE (state, payload) {
  if (typeof payload === 'boolean') {
    state.isLoadMore = payload
  } else {
    state.isLoadMore = false
  }
}

export function SET_LIST (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.list = payload
  } else {
    state.list = []
  }
}

export function SET_OFFSET (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.offset = payload
  } else {
    state.offset = 0
  }
}
