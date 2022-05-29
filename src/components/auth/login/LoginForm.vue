<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/auth'
import { useNotification } from '@/composables/notification'

const { login } = useAuth()
const { dismissErrorNotification, errorMessage } = useNotification()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const onSubmit = async () => {
  // Dismiss notification
  dismissErrorNotification()

  isLoading.value = true

  const payload = {
    email: email.value,
    password: password.value
  }

  try {
    await login(payload)
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
        Sign in with credentials
      </h6>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold uppercase"
          htmlFor="grid-email"
        >
          Email
        </label>
        <AppInput
          v-model.trim="email"
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

      <div
        v-if="errorMessage"
        class="mt-6"
      >
        <AppNotification
          color="danger"
          @dismiss="dismissErrorNotification"
        >
          {{ errorMessage }}
        </AppNotification>
      </div>

      <div class="mt-6 text-center">
        <AppButton
          class="w-full"
          color="dark"
          type="submit"
          :loading="isLoading"
        >
          Sign In
        </AppButton>
      </div>
    </form>
  </div>
</template>
