<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const errorMessage = ref('')
const email = ref('')
const name = ref('')
const successMessage = ref('')

const dismissErrorNotification = () => {
  errorMessage.value = ''
}

const dismissSuccessNotification = () => {
  successMessage.value = ''
}

const getUserById = async () => {
  try {
    const response = await store.dispatch('user/getUserById', route.params.id)
    if (response?.email) email.value = response.email
    if (response?.name) name.value = response.name
  } catch (error) {
    console.error(error)
  }
}

const onSubmit = async () => {
  const payload = {
    id: route.params.id,
    email: email.value,
    name: name.value
  }
  try {
    const response = await store.dispatch('user/editProfileById', payload)
    if (response?.message) {
      errorMessage.value = response.message
    } else if (response?.id) {
      successMessage.value = 'Successfully edit profile'
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getUserById()
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <AppCard>
      <template #header>
        Edit Profile
      </template>

      <!-- Name -->
      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold"
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
      <div class="relative w-full mb-3">
        <label
          class="block mb-2 text-xs font-bold"
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
