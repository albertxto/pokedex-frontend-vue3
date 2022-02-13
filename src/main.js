import { createApp } from 'vue'
import '@/assets/styles/index.scss'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import AppButton from '@/components/shared/AppButton.vue'
import AppCard from '@/components/shared/AppCard.vue'
import AppCheckbox from '@/components/shared/AppCheckbox.vue'
import AppInput from '@/components/shared/AppInput.vue'
import AppNotification from '@/components/shared/AppNotification.vue'
import AppTab from '@/components/shared/AppTab.vue'
import AppTable from '@/components/shared/AppTable.vue'
import AppTabs from '@/components/shared/AppTabs.vue'

// Init dark mode
if ((!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage.getItem('darkMode') === 'true') {
  store.dispatch('setting/toggleDarkMode', true)
}

// Init access token
if (localStorage.getItem('accessToken')) {
  store.commit('auth/SET_ACCESS_TOKEN', localStorage.getItem('accessToken'))
}

// Init refresh token
if (localStorage.getItem('refreshToken')) {
  store.commit('auth/SET_REFRESH_TOKEN', localStorage.getItem('refreshToken'))
}

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
app.component('AppNotification', AppNotification)
app.component('AppTab', AppTab)
app.component('AppTable', AppTable)
app.component('AppTabs', AppTabs)

// Mount
app.mount('#app')
