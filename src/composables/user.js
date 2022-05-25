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

  const userConfirmPassword = computed({
    get: () => store.getters['user/confirmPassword'],
    set: (value) => {
      store.commit('user/SET_CONFIRM_PASSWORD', value)
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

  const userPassword = computed({
    get: () => store.getters['user/password'],
    set: (value) => {
      store.commit('user/SET_PASSWORD', value)
    }
  })

  const userRole = computed({
    get: () => store.getters['user/role'],
    set: (value) => {
      store.commit('user/SET_ROLE', value)
    }
  })

  // Method
  const addUser = async (payload) => {
    try {
      const response = await store.dispatch('user/addUser', payload)
      if (response?.id) {
        return 'Successfully added user'
      }
    } catch (error) {
      if (error.response?.data?.message) {
        throw error.response.data.message
      }
    }
  }

  const changePasswordById = async (payload) => {
    try {
      const response = await store.dispatch('user/changePasswordById', payload)
      if (response?.id) {
        return 'Password changed successfully'
      }
    } catch (error) {
      if (error.response?.data?.message) {
        throw error.response.data.message
      }
    }
  }

  const closeModal = () => {
    isShowModal.value = false
    userId.value = ''
    userEmail.value = ''
  }

  const editUser = async (payload) => {
    try {
      const response = await store.dispatch('user/editUser', payload)
      if (response?.id) {
        return 'Successfully updated user'
      }
    } catch (error) {
      if (error.response?.data?.message) {
        throw error.response.data.message
      }
    }
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
    addUser,
    changePasswordById,
    closeModal,
    deleteUser,
    editUser,
    getUserById,
    getUserList,
    isLoading,
    isLoadMore,
    isShowModal,
    openModal,
    userConfirmPassword,
    userEmail,
    userId,
    userList,
    userName,
    userPassword,
    userRole
  }
}
