import { computed } from 'vue'
import { useStore } from 'vuex'

export const useUser = () => {
  const store = useStore()

  // Computed
  const isLoading = computed(() => store.getters['user/isLoading'])

  const isShowModal = computed({
    get () {
      return store.getters['user/isShowModal']
    },
    set (value) {
      store.commit('user/SET_IS_SHOW_MODAL', value)
    }
  })

  const userEmail = computed({
    get () {
      return store.getters['user/email']
    },
    set (value) {
      store.commit('user/SET_EMAIL', value)
    }
  })

  const userId = computed({
    get () {
      return store.getters['user/id']
    },
    set (value) {
      store.commit('user/SET_ID', value)
    }
  })

  const userName = computed({
    get () {
      return store.getters['user/name']
    },
    set (value) {
      store.commit('user/SET_NAME', value)
    }
  })

  const users = computed(() => store.getters['user/list'])

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

  const getUserList = async () => {
    try {
      await store.dispatch('user/getUserList')
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
    getUserList,
    isLoading,
    isShowModal,
    openModal,
    userEmail,
    userId,
    userName,
    users
  }
}
