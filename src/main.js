import { createApp } from 'vue'
import '@/assets/styles/index.scss'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import AppButton from '@/components/shared/AppButton.vue'
import AppCard from '@/components/shared/AppCard.vue'
import AppCheckbox from '@/components/shared/AppCheckbox.vue'
import AppInput from '@/components/shared/AppInput.vue'
import AppModal from '@/components/shared/AppModal.vue'
import AppNotification from '@/components/shared/AppNotification.vue'
import AppRadio from '@/components/shared/AppRadio.vue'
import AppSelect from '@/components/shared/AppSelect.vue'
import AppTable from '@/components/shared/AppTable.vue'
import AppTabs from '@/components/shared/AppTabs.vue'

import { parseJwt } from '@/utils/stringFormat.js'

// Init dark mode
if ((!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage.getItem('darkMode') === 'true') {
  store.dispatch('setting/toggleDarkMode', true)
}

// Init access token
if (localStorage.getItem('accessToken')) {
  const accessToken = localStorage.getItem('accessToken')
  store.commit('auth/SET_ACCESS_TOKEN', accessToken)

  // Parse JWT payload
  const currentUser = parseJwt(accessToken)
  store.commit('auth/SET_CURRENT_USER_EMAIL', currentUser.email)
  store.commit('auth/SET_CURRENT_USER_ID', currentUser.sub)
  store.commit('auth/SET_CURRENT_USER_NAME', currentUser.name)
  store.commit('auth/SET_CURRENT_USER_ROLE', currentUser.role)
}

// Init refresh token
if (localStorage.getItem('refreshToken')) {
  store.commit('auth/SET_REFRESH_TOKEN', localStorage.getItem('refreshToken'))
}

// Create vue app
const app = createApp(App)

// Use vuex
app.use(store)

// Use vue router
app.use(router)

// Register component globally
app.component('AppButton', AppButton)
app.component('AppCard', AppCard)
app.component('AppCheckbox', AppCheckbox)
app.component('AppInput', AppInput)
app.component('AppModal', AppModal)
app.component('AppNotification', AppNotification)
app.component('AppRadio', AppRadio)
app.component('AppSelect', AppSelect)
app.component('AppTable', AppTable)
app.component('AppTabs', AppTabs)

// Mount
app.mount('#app')
