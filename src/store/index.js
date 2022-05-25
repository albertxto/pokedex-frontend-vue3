import { createStore } from 'vuex'
import auth from './auth'
import pokemon from './pokemon'
import pokemonList from './pokemonList'
import setting from './setting'
import user from './user'

export default createStore({
  modules: {
    auth,
    pokemon,
    pokemonList,
    setting,
    user
  }
})
