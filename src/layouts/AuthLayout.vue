<script setup>
import bgImage from '@/assets/images/register_bg.png'
</script>

<template>
  <div>
    <main>
      <section class="relative w-full h-full min-h-screen py-40">
        <div
          class="absolute top-0 w-full h-full bg-no-repeat bg-full"
          :style="`background-image: url('${bgImage}')`"
        />
        <router-view />
      </section>
    </main>
  </div>
</template>
