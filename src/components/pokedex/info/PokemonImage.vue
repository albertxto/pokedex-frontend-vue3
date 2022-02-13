<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const image = computed(() => store.getters['pokemon/image'])
const isLoading = computed(() => store.getters['pokemon/isLoading'])
</script>

<template>
  <div class="relative">
    <img
      v-if="!isLoading"
      alt="Pokemon"
      class="max-w-xs align-middle border-none w-60 -mt-60"
      :src="image"
      loading="lazy"
    >
  </div>
</template>
