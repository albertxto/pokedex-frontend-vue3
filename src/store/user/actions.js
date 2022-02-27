import endpoints from '@/config/endpoints'
import { axiosInstance } from '@/plugins/axios'
import authHeader from '@/plugins/auth-header'

export function addUser ({ commit, rootGetters }, { email = '', name = '', password = '', role = '' }) {
  commit('SET_IS_LOADING', true)
  const accessToken = rootGetters['auth/accessToken']
  const payload = {
    email,
    name,
    password,
    role
  }
  return new Promise((resolve, reject) => axiosInstance
    .post('/users', payload, {
      headers: authHeader(accessToken)
    })
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

export function changePasswordById ({ commit, rootGetters }, { id = '', password = '' }) {
  commit('SET_IS_LOADING', true)
  const accessToken = rootGetters['auth/accessToken']
  const payload = {
    password
  }
  return new Promise((resolve, reject) => axiosInstance
    .patch(`${endpoints.USERS}/${id}`, payload, {
      headers: authHeader(accessToken)
    })
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

export function editUser ({ commit, rootGetters }, { email = '', id = '', name = '' }) {
  commit('SET_IS_LOADING', true)
  const accessToken = rootGetters['auth/accessToken']
  const payload = {
    email,
    name
  }
  return new Promise((resolve, reject) => axiosInstance
    .patch(`${endpoints.USERS}/${id}`, payload, {
      headers: authHeader(accessToken)
    })
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

export function getUserById ({ commit, rootGetters }, id) {
  commit('SET_IS_LOADING', true)
  const accessToken = rootGetters['auth/accessToken']
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.USERS}/${id}`, {
      headers: authHeader(accessToken)
    })
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

export function getUserList ({ commit, rootGetters }) {
  commit('SET_IS_LOADING', true)
  const accessToken = rootGetters['auth/accessToken']
  return new Promise((resolve, reject) => axiosInstance
    .get(endpoints.USERS, {
      headers: authHeader(accessToken)
    })
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
