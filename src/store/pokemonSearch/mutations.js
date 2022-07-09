export function SET_INPUT (state, payload) {
  if (typeof payload === 'string' && payload) {
    state.input = payload
  } else {
    state.input = ''
  }
}

export function SET_LIST (state, payload) {
  if (Array.isArray(payload) && payload.length) {
    state.list = payload
  } else {
    state.list = []
  }
}
