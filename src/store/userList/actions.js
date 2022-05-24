import endpoints from '@/config/endpoints'
import { limit } from '@/config/user'
import { axiosInstance } from '@/plugins/axios'

export function getUserList ({ commit, getters }, nextPage = false) {
  commit('SET_IS_LOADING', true)

  if (!nextPage) {
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
      commit('SET_IS_LOADING', false)
    })
  )
}
