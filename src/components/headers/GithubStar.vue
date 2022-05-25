<script setup>
import { StarIcon } from '@heroicons/vue/solid'

const url = import.meta.env.VITE_GITHUB_URL
</script>

<template>
  <a
    class="flex items-center py-2 text-xs font-bold text-white uppercase hover:text-slate-400"
    :href="url"
    target="_blank"
  >
    <StarIcon class="w-6 h-6" />
  </a>
</template>
