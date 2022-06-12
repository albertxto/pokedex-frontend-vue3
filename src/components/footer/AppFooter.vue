<script setup>
defineProps({
  absolute: {
    type: Boolean,
    defautl: false
  }
})

const githubUrl = import.meta.env.VITE_GITHUB_URL
</script>

<template>
  <footer
    class="w-full bg-transparent"
    :class="[
      absolute ? 'absolute bottom-0 pb-6' : 'relative'
    ]"
  >
    <div class="container px-6 mx-auto">
      <hr class="mb-6 border-black dark:border-white">
      <div class="flex flex-wrap items-center justify-center">
        <div class="py-1 text-sm text-center">
          Created by
          <a
            class="text-blue-500 hover:underline"
            target="_blank"
            :href="githubUrl"
          >Albert Prawono</a>.
          Pokémon and Pokémon character names are trademarks of Nintendo.
        </div>
      </div>
    </div>
  </footer>
</template>
