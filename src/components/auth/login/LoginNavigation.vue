<template>
  <div class="relative flex flex-wrap mt-6">
    <div class="w-1/2">
      <a
        href="javascript:void(0)"
        class="underline"
      >
        <small>Forgot password?</small>
      </a>
    </div>
    <div class="w-1/2 text-right">
      <router-link
        :to="{ name: 'register' }"
        class="underline"
      >
        <small>Create new account</small>
      </router-link>
    </div>
  </div>
</template>
