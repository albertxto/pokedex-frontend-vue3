<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const dismissNotification = () => {
  errorMessage.value = ''
}

const onSubmit = async () => {
  const payload = {
    name: name.value,
    email: email.value,
    password: password.value
  }

  try {
    const response = await store.dispatch('auth/register', payload)
    if (response.message) {
      errorMessage.value = response.message
    } else {
      router.push({ name: 'login' })
    }
  } catch (error) {
    console.error(error)
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
          v-if="errorMessage"
          color="danger"
          @dismiss="dismissNotification"
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
