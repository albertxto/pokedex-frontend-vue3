import axios from 'axios'
import store from '@/store'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json'
  }
})

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  // If access token is exist, set authorization header before request is sent
  const accessToken = store.getters['auth/accessToken']
  if (accessToken) {
    config.headers = {
      Authorization: `Bearer ${accessToken}`
    }
  }
  return config
}, (error) => {
  Promise.reject(error)
})

// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  return response
}, async (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  const originalRequest = error.config
  if (error.response.status === 401 && store.getters['auth/isRetryToken']) {
    store.commit('auth/SET_IS_RETRY_TOKEN', false)

    // Refresh access token
    try {
      const accessToken = await store.dispatch('auth/refreshToken')
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } catch (err) {
      store.commit('auth/RESET')
    }

    return axiosInstance(originalRequest)
  }
  return Promise.reject(error)
})

export { axios, axiosInstance }
