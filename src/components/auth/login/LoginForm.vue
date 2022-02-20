<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const dismissNotification = () => {
  errorMessage.value = ''
}

const onSubmit = async () => {
  const payload = {
    email: email.value,
    password: password.value
  }

  try {
    await store.dispatch('auth/login', payload)
    router.push({ name: 'users' })
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
          Sign In
        </AppButton>
      </div>
    </form>
  </div>
</template>
