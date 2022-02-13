export function getUserById ({ commit, rootGetters }, id) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${rootGetters['auth/accessToken']}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data?.id) commit('SET_ID', data.id)
        if (data?.name) commit('SET_NAME', data.name)
        if (data?.email) commit('SET_EMAIL', data.email)
        if (data?.role) commit('SET_ROLE', data.role)
        if (data?.isEmailVerified) commit('SET_IS_EMAIL_VERIFIED', data.isEmailVerified)
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
      .finally(() => {
        commit('SET_IS_LOADING', false)
      })
  })
}

export function getUserList ({ commit, rootGetters }) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${rootGetters['auth/accessToken']}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data?.results?.length) commit('SET_LIST', data.results)
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
      .finally(() => {
        commit('SET_IS_LOADING', false)
      })
  })
}
