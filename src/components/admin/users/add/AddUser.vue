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
const { addUser, userConfirmPassword, userEmail, userName, userPassword, userRole } = useUser()

const onSubmit = async () => {
  // Dismiss all notifications
  dismissAllNotifications()

  // Validate confirm password
  if (userPassword.value !== userConfirmPassword.value) {
    errorMessage.value = 'Password must be the same as confirm password'
    return
  }

  const payload = {
    email: userEmail.value,
    name: userName.value,
    password: userPassword.value,
    role: userRole.value
  }
  try {
    const response = await addUser(payload)
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
        Add User
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

      <!-- Role -->
      <div class="relative w-full mt-6">
        <label
          class="block mb-4 text-sm font-bold"
          htmlFor="grid-role"
        >
          Role
        </label>
        <AppRadio
          v-model="userRole"
          name="role"
          label="Admin"
          val="admin"
        />
        <AppRadio
          v-model="userRole"
          name="role"
          label="User"
          val="user"
        />
      </div>

      <!-- Password -->
      <div class="relative w-full mt-6">
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
          htmlFor="grid-password"
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
