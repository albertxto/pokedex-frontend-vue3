import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'

export function login ({ commit }, payload = { email: '', password: '' }) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .post(endpoints.AUTH.LOGIN, payload)
    .then((response) => {
      if (response.data.tokens && response.data.user) {
        const { access, refresh } = response.data.tokens

        // Set token to store
        commit('SET_ACCESS_TOKEN', access.token)
        commit('SET_REFRESH_TOKEN', refresh.token)

        // Set token to local storage
        localStorage.setItem('accessToken', access.token)
        localStorage.setItem('refreshToken', refresh.token)
      }
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
    .finally(() => {
      commit('SET_IS_LOADING', false)
    })
  )
}

export function register ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .post(endpoints.AUTH.REGISTER, payload)
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
    .finally(() => {
      commit('SET_IS_LOADING', false)
    })
  )
}
