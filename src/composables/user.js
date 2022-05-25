import { computed } from 'vue'
import { useStore } from 'vuex'

export const useUser = () => {
  const store = useStore()

  // Computed
  const isLoading = computed(() => store.getters['user/isLoading'])

  const isLoadMore = computed(() => store.getters['user/isLoadMore'])

  const isShowModal = computed({
    get: () => store.getters['user/isShowModal'],
    set: (value) => {
      store.commit('user/SET_IS_SHOW_MODAL', value)
    }
  })

  const userEmail = computed({
    get: () => store.getters['user/email'],
    set: (value) => {
      store.commit('user/SET_EMAIL', value)
    }
  })

  const userId = computed({
    get: () => store.getters['user/id'],
    set: (value) => {
      store.commit('user/SET_ID', value)
    }
  })

  const userList = computed(() => store.getters['user/list'])

  const userName = computed({
    get: () => store.getters['user/name'],
    set: (value) => {
      store.commit('user/SET_NAME', value)
    }
  })

  // Method
  const closeModal = () => {
    isShowModal.value = false
    userId.value = ''
    userEmail.value = ''
  }

  const deleteUser = async () => {
    if (userId.value) {
      try {
        await store.dispatch('user/deleteUser', userId.value)
        await getUserList()
        closeModal()
      } catch (error) {
        console.error(error)
      }
    }
  }

  const getUserById = async (id = '') => {
    try {
      await store.dispatch('user/getUserById', id)
    } catch (error) {
      console.error(error)
    }
  }

  const getUserList = async (nextPage = false) => {
    try {
      await store.dispatch('user/getUserList', nextPage)
    } catch (error) {
      console.error(error)
    }
  }

  const openModal = (id = '', email = '') => {
    isShowModal.value = true
    userId.value = id
    userEmail.value = email
  }

  return {
    closeModal,
    deleteUser,
    getUserById,
    getUserList,
    isLoading,
    isLoadMore,
    isShowModal,
    openModal,
    userEmail,
    userId,
    userList,
    userName
  }
}
