export function toggleDarkMode ({ commit, getters }, payload = null) {
  const toggle = payload !== null ? payload : !getters.darkMode
  document.documentElement.classList[toggle ? 'add' : 'remove']('dark')
  localStorage.setItem('darkMode', toggle)
  commit('SET_DARK_MODE', toggle)
}
