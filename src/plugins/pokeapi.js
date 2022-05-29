import { Pokedex } from 'pokeapi-js-wrapper'

const pokeApiInstance = new Pokedex({
  protocol: import.meta.env.VITE_POKEAPI_PROTOCOL,
  hostName: import.meta.env.VITE_POKEAPI_HOST_NAME,
  versionPath: import.meta.env.VITE_POKEAPI_VERSION_PATH,
  cache: true,
  cacheImages: true,
  timeout: 5000
})

export { pokeApiInstance }
