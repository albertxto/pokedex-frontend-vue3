import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'
import { parseJwt } from '@/utils/stringFormat.js'

export function login ({ commit }, payload = { email: '', password: '' }) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .post(endpoints.AUTH.LOGIN, payload)
    .then((response) => {
      if (response.data.tokens && response.data.user) {
        const { access, refresh } = response.data.tokens
        const { email, id, name, role } = response.data.user

        // Set token and current user to store
        commit('SET_ACCESS_TOKEN', access.token)
        commit('SET_REFRESH_TOKEN', refresh.token)
        commit('SET_CURRENT_USER_EMAIL', email)
        commit('SET_CURRENT_USER_ID', id)
        commit('SET_CURRENT_USER_NAME', name)
        commit('SET_CURRENT_USER_ROLE', role)
        commit('SET_IS_RETRY_TOKEN', true)

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

export function logout ({ commit, getters }) {
  commit('SET_IS_LOADING', true)

  const { refreshToken } = getters
  const payload = {
    refreshToken
  }

  return new Promise((resolve, reject) => axiosInstance
    .post(endpoints.AUTH.LOGOUT, payload)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
    .finally(() => {
      commit('RESET')
    })
  )
}

export function refreshToken ({ commit, getters }) {
  const { refreshToken } = getters
  const payload = {
    refreshToken
  }
  return new Promise((resolve, reject) => axiosInstance
    .post(endpoints.AUTH.REFRESH_TOKEN, payload)
    .then((response) => {
      const { access, refresh } = response.data

      // Set token to store
      commit('SET_ACCESS_TOKEN', access.token)
      commit('SET_REFRESH_TOKEN', refresh.token)

      // Parse JWT payload and set current user to store
      const currentUser = parseJwt(access.token)
      commit('SET_CURRENT_USER_EMAIL', currentUser.email)
      commit('SET_CURRENT_USER_ID', currentUser.sub)
      commit('SET_CURRENT_USER_NAME', currentUser.name)
      commit('SET_CURRENT_USER_ROLE', currentUser.role)

      // Set token to local storage
      localStorage.setItem('accessToken', access.token)
      localStorage.setItem('refreshToken', refresh.token)

      commit('SET_IS_RETRY_TOKEN', true)

      resolve(access.token)
    })
    .catch((error) => {
      reject(error)
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
