<script setup>
defineProps({
  image: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex flex-col items-center w-4/12 gap-1">
    <div class="relative w-16 sm:w-24">
      <div
        class="absolute w-full h-16 bg-no-repeat bg-contain sm:h-24 opacity-20"
        style="background-image: url('/src/assets/images/pokeball.png')"
      />

      <div class="relative">
        <img
          v-if="image"
          class="object-cover"
          :src="image"
        >
        <div
          v-else
          class="h-16"
        />
      </div>
    </div>

    <div class="capitalize">
      {{ name }}
    </div>
  </div>
</template>
