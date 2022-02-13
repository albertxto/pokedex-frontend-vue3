export function login ({ commit }, payload = { email: '', password: '' }) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        if (data.tokens && data.user) {
          const { access, refresh } = data.tokens

          console.log(data)

          // Set token to store
          commit('SET_ACCESS_TOKEN', access.token)
          commit('SET_REFRESH_TOKEN', refresh.token)

          // Set token to local storage
          localStorage.setItem('accessToken', access.token)
          localStorage.setItem('refreshToken', refresh.token)
        }
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

export function register ({ commit }, payload) {
  commit('SET_IS_LOADING', true)
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
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
