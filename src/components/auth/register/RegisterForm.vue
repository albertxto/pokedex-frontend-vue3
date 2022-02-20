<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = ref('')
const email = ref('')
const password = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const dismissSuccessNotification = () => {
  successMessage.value = ''
}

const dismissErrorNotification = () => {
  errorMessage.value = ''
}

const onSubmit = async () => {
  const payload = {
    name: name.value,
    email: email.value,
    password: password.value
  }

  try {
    await store.dispatch('auth/register', payload)
    name.value = ''
    email.value = ''
    password.value = ''
    errorMessage.value = ''
    successMessage.value = 'Successfully registered'
  } catch (error) {
    if (error.response?.data?.message) {
      errorMessage.value = error.response.data.message
    }
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

      <div
        v-if="errorMessage"
        class="mt-6"
      >
        <AppNotification
          v-if="successMessage"
          color="success"
          @dismiss="dismissSuccessNotification"
        >
          {{ successMessage }}
        </AppNotification>

        <AppNotification
          v-if="errorMessage"
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
        >
          Create Account
        </AppButton>
      </div>
    </form>
  </div>
</template>
