<script setup>
import { defineAsyncComponent } from 'vue'
import bgImage from '@/assets/images/register_bg.png'

const AppFooter = defineAsyncComponent(() => import('@/components/footer/AppFooter.vue'))
const AuthNavbar = defineAsyncComponent(() => import('@/components/navbars/AuthNavbar.vue'))
</script>

<template>
  <div>
    <AuthNavbar />
    <main>
      <section class="relative w-full h-full min-h-screen py-40">
        <div
          class="absolute top-0 w-full h-full bg-no-repeat bg-full"
          :style="`background-image: url('${bgImage}')`"
        />
        <router-view />
        <AppFooter absolute />
      </section>
    </main>
  </div>
</template>
