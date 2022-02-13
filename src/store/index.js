import { createStore } from 'vuex'
import auth from './auth'
import pokemon from './pokemon'
import setting from './setting'
import user from './user'

export default createStore({
  modules: {
    auth,
    pokemon,
    setting,
    user
  }
})
