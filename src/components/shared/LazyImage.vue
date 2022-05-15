<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  src: {
    type: String,
    default: null
  }
})

const imageRef = ref(null)

onMounted(() => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target
        image.src = image.dataset.src
        image.classList.remove('lazy-image')
        imageObserver.unobserve(image)
      }
    })
  })

  imageObserver.observe(imageRef.value)
})
</script>

<template>
  <img
    ref="imageRef"
    class="lazy-image"
    :data-src="src"
  >
</template>
