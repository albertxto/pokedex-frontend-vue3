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
const { editUser, userEmail, userId, userName } = useUser()

const onSubmit = async () => {
  // Dismiss all notifications
  dismissAllNotifications()

  const payload = {
    id: userId.value,
    email: userEmail.value,
    name: userName.value
  }
  try {
    const response = await editUser(payload)
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
        Edit Profile
      </template>

      <!-- Name -->
      <div class="relative w-full">
        <label
          class="block mb-4 text-sm font-bold"
          htmlFor="grid-name"
        >
          Name
        </label>
        <AppInput
          v-model="userName"
          placeholder="Name"
          type="text"
        />
      </div>

      <!-- Email -->
      <div class="relative w-full mt-6">
        <label
          class="block mb-4 text-sm font-bold"
          htmlFor="grid-email"
        >
          Email
        </label>
        <AppInput
          v-model="userEmail"
          placeholder="Email"
          type="text"
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

        <router-link
          v-slot="{ navigate }"
          :to="{ name: 'users' }"
        >
          <AppButton
            color="danger"
            size="sm"
            @click="navigate"
          >
            Back
          </AppButton>
        </router-link>
      </template>
    </AppCard>
  </form>
</template>
