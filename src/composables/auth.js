import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { roles as userRolesConfig } from '@/config/user'

export const useAuth = () => {
  const router = useRouter()
  const store = useStore()

  // Computed
  const currentUserId = computed(() => store.getters['auth/currentUserId'])
  const currentUserRole = computed(() => store.getters['auth/currentUserRole'])
  const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])

  // Method
  const isUserRoleAdmin = (role = '') => role === userRolesConfig.admin.value

  const login = async (payload) => {
    try {
      await store.dispatch('auth/login', payload)
      router.push({ name: 'dashboard' })
    } catch (error) {
      if (error.response?.data?.message) {
        throw error.response.data.message
      }
    }
  }

  const logout = async () => {
    try {
      await store.dispatch('auth/logout')
    } catch (error) {
      console.error(error)
    }
  }

  const register = async (payload) => {
    try {
      const response = await store.dispatch('auth/register', payload)
      if (response?.user?.id) {
        return 'Successfully register'
      }
    } catch (error) {
      if (error.response?.data?.message) {
        throw error.response.data.message
      }
    }
  }

  return {
    currentUserId,
    currentUserRole,
    isAuthenticated,
    isUserRoleAdmin,
    login,
    logout,
    register
  }
}
