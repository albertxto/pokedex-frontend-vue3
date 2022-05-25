import { computed } from 'vue'
import { useStore } from 'vuex'

export const useAuth = () => {
  const store = useStore()

  // Computed
  const currentUserId = computed(() => store.getters['auth/currentUserId'])

  return { currentUserId }
}
