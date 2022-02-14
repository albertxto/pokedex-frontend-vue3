<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const confirmPassword = ref('')
const errorMessage = ref('')
const password = ref('')
const successMessage = ref('')

const dismissErrorNotification = () => {
  errorMessage.value = ''
}

const dismissSuccessNotification = () => {
  successMessage.value = ''
}

const onSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Password must be the same as confirm password'
  }

  const payload = {
    id: route.params.id,
    password: password.value
  }
  try {
    const response = await store.dispatch('user/changePasswordById', payload)
    if (response?.message) {
      errorMessage.value = response.message
    } else if (response?.id) {
      successMessage.value = 'Successfully change password'
      confirmPassword.value = ''
      password.value = ''
    }
  } catch (error) {
    console.error(error)
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
      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold"
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
      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold"
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
        color="success"
        @dismiss="dismissSuccessNotification"
      >
        {{ successMessage }}
      </AppNotification>

      <!-- Error Notification -->
      <AppNotification
        v-if="errorMessage"
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
            class="ml-3"
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
