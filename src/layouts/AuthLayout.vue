<script setup>
import { defineAsyncComponent } from 'vue'
import bgImage from '@/assets/images/register_bg.png'

const AuthNavbar = defineAsyncComponent(() => import('@/components/navbars/AuthNavbar.vue'))
</script>

<template>
  <div>
    <AuthNavbar />
    <main>
      <section class="relative w-full h-full min-h-screen py-20">
        <div
          class="absolute top-0 w-full h-full bg-no-repeat bg-full"
          :style="`background-image: url('${bgImage}')`"
        />
        <router-view />
      </section>
    </main>
  </div>
</template>
