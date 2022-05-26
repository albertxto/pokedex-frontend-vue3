import { computed } from 'vue'
import { useStore } from 'vuex'
import { roles as userRolesConfig } from '@/config/user'

export const useAuth = () => {
  const store = useStore()

  // Computed
  const currentUserId = computed(() => store.getters['auth/currentUserId'])
  const currentUserRole = computed(() => store.getters['auth/currentUserRole'])
  const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])

  // Method
  const isUserRoleAdmin = (role = '') => role === userRolesConfig.admin.value

  const logout = async () => {
    try {
      await store.dispatch('auth/logout')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    currentUserId,
    currentUserRole,
    isAuthenticated,
    isUserRoleAdmin,
    logout
  }
}
