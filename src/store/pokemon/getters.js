export function about (state) {
  return state.about
}

export function id (state) {
  return state.id.toString().padStart(3, '0')
}

export function image (state) {
  return state.image
}

export function isLoading (state) {
  return state.isLoading
}

export function name (state) {
  return state.name
}

export function types (state) {
  return state.types
}
