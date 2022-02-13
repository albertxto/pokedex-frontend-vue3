<script setup>
import { defineAsyncComponent } from 'vue'
const LoginForm = defineAsyncComponent(() => import('@/components/auth/login/LoginForm.vue'))
const LoginNavigation = defineAsyncComponent(() => import('@/components/auth/login/LoginNavigation.vue'))
</script>

<template>
  <div class="container h-full px-4 mx-auto">
    <div class="flex items-center content-center justify-center h-full">
      <div class="w-full px-4 lg:w-4/12">
        <AppCard>
          <LoginForm />
        </AppCard>
        <LoginNavigation />
      </div>
    </div>
  </div>
</template>
