import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'

export function addUser ({ commit }, { email = '', name = '', password = '', role = '' }) {
  commit('SET_IS_LOADING', true)
  const payload = {
    email,
    name,
    password,
    role
  }
  return new Promise((resolve, reject) => axiosInstance
    .post('/users', payload)
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

export function changePasswordById ({ commit }, { id = '', password = '' }) {
  commit('SET_IS_LOADING', true)
  const payload = {
    password
  }
  return new Promise((resolve, reject) => axiosInstance
    .patch(`${endpoints.USERS}/${id}`, payload)
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

export function deleteUser ({ commit }, id = '') {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .delete(`${endpoints.USERS}/${id}`)
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

export function editUser ({ commit }, { email = '', id = '', name = '' }) {
  commit('SET_IS_LOADING', true)
  const payload = {
    email,
    name
  }
  return new Promise((resolve, reject) => axiosInstance
    .patch(`${endpoints.USERS}/${id}`, payload)
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

export function getUserById ({ commit }, id = '') {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.USERS}/${id}`)
    .then((response) => {
      const { data } = response
      if (data?.id) commit('SET_ID', data.id)
      if (data?.name) commit('SET_NAME', data.name)
      if (data?.email) commit('SET_EMAIL', data.email)
      if (data?.role) commit('SET_ROLE', data.role)
      if (data?.isEmailVerified) commit('SET_IS_EMAIL_VERIFIED', data.isEmailVerified)
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

export function getUserList ({ commit }) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => axiosInstance
    .get(endpoints.USERS)
    .then((response) => {
      if (response.data?.results?.length) commit('SET_LIST', response.data.results)
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
