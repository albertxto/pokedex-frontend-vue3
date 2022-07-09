import { createStore } from 'vuex'
import auth from './auth'
import favoritePokemon from './favoritePokemon'
import pokemon from './pokemon'
import pokemonList from './pokemonList'
import pokemonSearch from './pokemonSearch'
import setting from './setting'
import user from './user'

export default createStore({
  modules: {
    auth,
    favoritePokemon,
    pokemon,
    pokemonList,
    pokemonSearch,
    setting,
    user
  }
})
