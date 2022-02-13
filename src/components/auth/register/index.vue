<script setup>
import { defineAsyncComponent } from 'vue'
const RegisterForm = defineAsyncComponent(() => import('@/components/auth/register/RegisterForm.vue'))
const RegisterNavigation = defineAsyncComponent(() => import('@/components/auth/register/RegisterNavigation.vue'))
</script>

<template>
  <div class="container h-full px-4 mx-auto">
    <div class="flex items-center content-center justify-center h-full">
      <div class="w-full px-4 lg:w-6/12">
        <AppCard>
          <RegisterForm />
        </AppCard>
        <RegisterNavigation />
      </div>
    </div>
  </div>
</template>
