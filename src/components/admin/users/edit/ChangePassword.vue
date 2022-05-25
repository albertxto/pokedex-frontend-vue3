<script setup>
import { useNotification } from '@/composables/notification'
import { useUser } from '@/composables/user'

const {
  dismissAllNotifications,
  dismissErrorNotification,
  dismissSuccessNotification,
  errorMessage,
  successMessage
} = useNotification()
const { changePasswordById, userConfirmPassword, userId, userPassword } = useUser()

const onSubmit = async () => {
  // Dismiss all notifications
  dismissAllNotifications()

  // Validate confirm password
  if (userPassword.value !== userConfirmPassword.value) {
    errorMessage.value = 'Password must be the same as confirm password'
    return
  }

  const payload = {
    id: userId.value,
    password: userPassword.value
  }
  try {
    const response = await changePasswordById(payload)
    successMessage.value = response
  } catch (error) {
    errorMessage.value = error
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
          v-model="userPassword"
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
          v-model="userConfirmPassword"
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
