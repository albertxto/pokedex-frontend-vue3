<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const email = ref('')
const name = ref('')
const role = ref('')
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
    email: email.value,
    name: name.value,
    password: password.value,
    role: role.value
  }
  try {
    const response = await store.dispatch('user/addUser', payload)
    if (response?.id) {
      successMessage.value = 'Successfully added user'

      // Reset form
      email.value = ''
      name.value = ''
      role.value = ''
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
          v-model="name"
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
          v-model="email"
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
        <AppInput
          v-model="role"
          placeholder="Role"
          type="text"
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
          v-model="password"
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
