<template>
  <div class="relative flex flex-wrap mt-6">
    <div class="w-1/2">
      <small>
        Already have an account?
        <router-link
          :to="{ name: 'login' }"
          class="underline"
        >
          Login
        </router-link>
      </small>
    </div>
  </div>
</template>
