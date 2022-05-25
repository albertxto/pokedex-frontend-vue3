import { computed } from 'vue'
import { useStore } from 'vuex'

export const useAuth = () => {
  const store = useStore()

  // Computed
  const currentUserId = computed(() => store.getters['auth/currentUserId'])

  // Method
  const logout = async () => {
    try {
      await store.dispatch('auth/logout')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    currentUserId,
    logout
  }
}
