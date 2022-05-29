import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { validatePokemonRoute } from '@/utils/validation'

export const useFavoritePokemon = () => {
  const store = useStore()
  const route = useRoute()

  // Computed
  const favoritePokemonList = computed(() => store.getters['favoritePokemon/list'])
  const favoritePokemonListCount = computed(() => store.getters['favoritePokemon/listCount'])
  const isFavorite = computed({
    get: () => store.getters['favoritePokemon/isFavorite'],
    set: (value) => {
      store.commit('favoritePokemon/SET_IS_FAVORITE', value)
    }
  })
  const isLoadingButton = computed(() => store.getters['favoritePokemon/isLoadingButton'])
  const isLoadingField = computed(() => store.getters['favoritePokemon/isLoadingField'])
  const isLoadMore = computed(() => store.getters['favoritePokemon/isLoadMore'])
  const isShowModal = computed({
    get: () => store.getters['favoritePokemon/isShowModal'],
    set: (value) => {
      store.commit('favoritePokemon/SET_IS_SHOW_MODAL', value)
    }
  })

  // Method
  const closeModal = () => {
    isShowModal.value = false
  }

  const getFavoritePokemonList = async (nextPage = false) => {
    try {
      await store.dispatch('favoritePokemon/getFavoritePokemonList', nextPage)
    } catch (error) {
      console.error(error)
    }
  }

  const getFavoritePokemonListCount = async () => {
    try {
      await store.dispatch('favoritePokemon/getFavoritePokemonListCount')
    } catch (error) {
      console.error(error)
    }
  }

  const getIsFavoritePokemon = async () => {
    if (validatePokemonRoute(route.params.id)) return
    try {
      await store.dispatch('favoritePokemon/getIsFavoritePokemon', route.params.id)
    } catch (error) {
      console.error(error)
    }
  }

  const setIsFavoritePokemon = async () => {
    if (validatePokemonRoute(route.params.id)) return
    try {
      await store.dispatch('favoritePokemon/setIsFavoritePokemon', route.params.id)
    } catch (error) {
      console.error(error)
    }
  }

  const openModal = () => {
    if (isLoadingButton.value) return
    isShowModal.value = true
  }

  return {
    closeModal,
    favoritePokemonList,
    favoritePokemonListCount,
    getFavoritePokemonList,
    getFavoritePokemonListCount,
    getIsFavoritePokemon,
    isFavorite,
    isLoadingButton,
    isLoadingField,
    isLoadMore,
    isShowModal,
    openModal,
    setIsFavoritePokemon
  }
}
