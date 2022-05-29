<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/auth'
import { useNotification } from '@/composables/notification'

const { register } = useAuth()
const {
  dismissAllNotifications,
  dismissErrorNotification,
  dismissSuccessNotification,
  errorMessage,
  successMessage
} = useNotification()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)

const onSubmit = async () => {
  // Dismiss all notifications
  dismissAllNotifications()

  // Validate confirm password
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Password must be the same as confirm password'
    return
  }

  isLoading.value = true

  const payload = {
    name: name.value,
    email: email.value,
    password: password.value
  }

  try {
    const response = await register(payload)
    name.value = ''
    email.value = ''
    password.value = ''
    successMessage.value = response
  } catch (error) {
    errorMessage.value = error
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <div class="mb-3 text-center">
      <h6 class="text-sm font-bold">
        Sign up with credentials
      </h6>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold uppercase"
          htmlFor="grid-name"
        >
          Name
        </label>
        <AppInput
          v-model="name"
          placeholder="Name"
          type="text"
        />
      </div>

      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold uppercase"
          htmlFor="grid-email"
        >
          Email
        </label>
        <AppInput
          v-model="email"
          placeholder="Email"
          type="text"
        />
      </div>

      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold uppercase"
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

      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold uppercase"
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

      <AppNotification
        v-if="successMessage"
        class="mt-6"
        color="success"
        @dismiss="dismissSuccessNotification"
      >
        {{ successMessage }}
      </AppNotification>

      <AppNotification
        v-if="errorMessage"
        class="mt-6"
        color="danger"
        @dismiss="dismissErrorNotification"
      >
        {{ errorMessage }}
      </AppNotification>

      <div class="mt-6 text-center">
        <AppButton
          class="w-full"
          color="dark"
          type="submit"
          :loading="isLoading"
        >
          Create Account
        </AppButton>
      </div>
    </form>
  </div>
</template>
