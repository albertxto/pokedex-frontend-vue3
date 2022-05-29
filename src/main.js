import { createApp, defineAsyncComponent } from 'vue'
import '@/assets/styles/index.scss'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import { parseJwt } from '@/utils/stringFormat.js'

const AppButton = defineAsyncComponent(() => import('@/components/shared/AppButton.vue'))
const AppCard = defineAsyncComponent(() => import('@/components/shared/AppCard.vue'))
const AppCheckbox = defineAsyncComponent(() => import('@/components/shared/AppCheckbox.vue'))
const AppInput = defineAsyncComponent(() => import('@/components/shared/AppInput.vue'))
const AppModal = defineAsyncComponent(() => import('@/components/shared/AppModal.vue'))
const AppNotification = defineAsyncComponent(() => import('@/components/shared/AppNotification.vue'))
const AppRadio = defineAsyncComponent(() => import('@/components/shared/AppRadio.vue'))
const AppSelect = defineAsyncComponent(() => import('@/components/shared/AppSelect.vue'))
const AppSkeleton = defineAsyncComponent(() => import('@/components/shared/AppSkeleton.vue'))
const AppTable = defineAsyncComponent(() => import('@/components/shared/AppTable.vue'))
const AppTabs = defineAsyncComponent(() => import('@/components/shared/AppTabs.vue'))
const AppTd = defineAsyncComponent(() => import('@/components/shared/AppTd.vue'))

// Init dark mode
if ((!localStorage.getItem('darkMode') &&
  window.matchMedia('(prefers-color-scheme: dark)').matches) ||
  localStorage.getItem('darkMode') === 'true') {
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
app.component('AppSkeleton', AppSkeleton)
app.component('AppTable', AppTable)
app.component('AppTabs', AppTabs)
app.component('AppTd', AppTd)

// Mount
app.mount('#app')
