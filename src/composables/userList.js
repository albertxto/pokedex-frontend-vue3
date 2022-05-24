import { computed } from 'vue'
import { useStore } from 'vuex'

export const useUserList = () => {
  const store = useStore()

  // Computed
  const isLoading = computed(() => store.getters['userList/isLoading'])
  const isLoadMore = computed(() => store.getters['userList/isLoadMore'])
  const users = computed(() => store.getters['userList/list'])

  // Method
  const getUserList = async (nextPage = false) => {
    try {
      await store.dispatch('userList/getUserList', nextPage)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getUserList,
    isLoading,
    isLoadMore,
    users
  }
}
