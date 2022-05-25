<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useUser } from '@/composables/user'

const store = useStore()
const { userId } = useUser()

const password = ref('')
const confirmPassword = ref('')

const successMessage = ref('')
const errorMessage = ref('')

const dismissNotification = () => {
  successMessage.value = ''
  errorMessage.value = ''
}
const dismissSuccessNotification = () => {
  successMessage.value = ''
}
const dismissErrorNotification = () => {
  errorMessage.value = ''
}

const onSubmit = async () => {
  // Dismiss all notifications
  dismissNotification()

  // Validate confirm password
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Password must be the same as confirm password'
    return
  }

  const payload = {
    id: userId.value,
    password: password.value
  }
  try {
    const response = await store.dispatch('user/changePasswordById', payload)
    if (response?.id) {
      successMessage.value = 'Password changed successfully'

      // Reset form
      password.value = ''
      confirmPassword.value = ''
    }
  } catch (error) {
    if (error.response?.data?.message) {
      errorMessage.value = error.response.data.message
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <AppCard>
      <template #header>
        Change Password
      </template>

      <!-- Password -->
      <div class="relative w-full">
        <label
          class="block mb-4 text-sm font-bold"
          htmlFor="grid-password"
        >
          Password
        </label>
        <AppInput
          v-model="password"
          placeholder="Password"
          type="password"
        />
      </div>

      <!-- Confirm Password -->
      <div class="relative w-full mt-6">
        <label
          class="block mb-4 text-sm font-bold"
          htmlFor="grid-confirm-password"
        >
          Confirm Password
        </label>
        <AppInput
          v-model="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
      </div>

      <!-- Success Notification -->
      <AppNotification
        v-if="successMessage"
        class="mt-6"
        color="success"
        @dismiss="dismissSuccessNotification"
      >
        {{ successMessage }}
      </AppNotification>

      <!-- Error Notification -->
      <AppNotification
        v-if="errorMessage"
        class="mt-6"
        color="danger"
        @dismiss="dismissErrorNotification"
      >
        {{ errorMessage }}
      </AppNotification>

      <!-- Submit -->
      <template #footer>
        <AppButton
          color="info"
          size="sm"
          type="submit"
        >
          Submit
        </AppButton>
      </template>
    </AppCard>
  </form>
</template>
