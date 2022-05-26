export const getIdFromPokeApiUrl = (url = '') => Number.parseInt(url.split('/')[6]) || null

export const getPokemonImageUrlById = (id = '1') => {
  return `${import.meta.env.VITE_POKEMON_IMAGE_URL}/${id}.png` || null
}

export const normalizePokeApiName = (name = '') => name.replaceAll('-', ' ')

export const parseJwt = (token = '') => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return JSON.parse(jsonPayload)
}

export const pokedexNumberFormat = (id = '1') => {
  return `#${id.toString().padStart(3, '0')}`
}

export const thousandSeparator = (number = 0) => {
  return number.toLocaleString()
}
