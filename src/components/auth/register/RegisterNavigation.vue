<template>
  <div class="relative flex flex-wrap mt-6">
    <div class="w-1/2 text-sm">
      Already have an account?
      <router-link
        :to="{ name: 'login' }"
        class="underline"
      >
        Login
      </router-link>
    </div>
  </div>
</template>
