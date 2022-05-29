import endpoints from '@/config/endpoints'
import { limit } from '@/config/user'
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
      commit('RESET')
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
  commit('RESET')
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

export function getUserList ({ commit, getters }, nextPage = false) {
  commit('SET_IS_LOADING_BUTTON', true)

  if (!nextPage) {
    commit('SET_IS_LOADING_FIELD', true)
    commit('SET_LIST', [])
    commit('SET_PAGE', 1)
  }

  const { page } = getters

  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.USERS}/?limit=${limit}&page=${page}`)
    .then((response) => {
      const { results } = response.data

      if (results.length) {
        commit('PUSH_LIST', results)

        if (results.length === limit) {
          commit('SET_PAGE', page + 1)
          commit('SET_IS_LOAD_MORE', true)
        } else {
          commit('SET_IS_LOAD_MORE', false)
        }
      } else {
        commit('SET_IS_LOAD_MORE', false)
      }

      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
    .finally(() => {
      commit('SET_IS_LOADING_BUTTON', false)
      if (!nextPage) {
        commit('SET_IS_LOADING_FIELD', false)
      }
    })
  )
}

export function getUserListCount ({ commit }) {
  return new Promise((resolve, reject) => axiosInstance
    .get(`${endpoints.USERS}${endpoints.COUNT}`)
    .then((response) => {
      const { totalResults } = response.data
      commit('SET_LIST_COUNT', totalResults)
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
  )
}
