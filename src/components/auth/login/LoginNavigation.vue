<template>
  <div class="relative flex flex-wrap mt-6">
    <div class="w-1/2 text-sm">
      <a
        href="javascript:void(0)"
        class="underline"
      >
        Forgot password?
      </a>
    </div>
    <div class="w-1/2 text-sm text-right">
      <router-link
        :to="{ name: 'register' }"
        class="underline"
      >
        Create new account
      </router-link>
    </div>
  </div>
</template>
