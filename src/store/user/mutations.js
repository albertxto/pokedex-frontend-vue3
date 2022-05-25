export function PUSH_LIST (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.list.push(...payload)
  }
}

export function RESET (state) {
  state.confirmPassword = ''
  state.email = ''
  state.id = ''
  state.isLoading = true
  state.isShowModal = false
  state.name = ''
  state.password = ''
  state.role = ''
}

export function SET_CONFIRM_PASSWORD (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.confirmPassword = payload
  } else {
    state.confirmPassword = ''
  }
}

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

export function SET_NAME (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.name = payload
  } else {
    state.name = ''
  }
}

export function SET_PAGE (state, payload) {
  if (typeof payload === 'number' && payload > 0) {
    state.page = payload
  } else {
    state.page = 1
  }
}

export function SET_PASSWORD (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.password = payload
  } else {
    state.password = ''
  }
}

export function SET_ROLE (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.role = payload
  } else {
    state.role = ''
  }
}
