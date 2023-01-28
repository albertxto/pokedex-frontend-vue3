<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

defineProps({
  forceWhite: {
    type: Boolean,
    default: false
  }
})

const store = useStore()

const darkMode = computed(() => store.getters['setting/darkMode'])

const toggleDarkMode = () => {
  store.dispatch('setting/toggleDarkMode')
}
</script>

<template>
  <a
    href="javascript:void(0)"
    class="flex items-center py-2 text-xs font-bold hover:text-slate-400"
    :class="{ 'text-white': forceWhite }"
    @click.prevent="toggleDarkMode"
  >
    <MoonIcon
      v-if="darkMode"
      class="w-6 h-6"
    />
    <SunIcon
      v-else
      class="w-6 h-6"
    />
  </a>
</template>
