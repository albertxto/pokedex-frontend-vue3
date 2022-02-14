<script setup>
import { computed, useSlots } from 'vue'

const slots = useSlots()
const hasFooterSlot = computed(() => slots.footer)
const hasHeaderSlot = computed(() => slots.header)
</script>

<template>
  <div class="relative flex flex-col w-full min-w-0 break-words border-0 rounded-lg shadow-lg bg-slate-200 dark:bg-slate-900">
    <header
      v-if="hasHeaderSlot"
      class="flex items-stretch border-b border-gray-100 dark:border-gray-800"
    >
      <div class="flex items-center px-6 py-3 font-bold grow">
        <slot name="header" />
      </div>
    </header>

    <div class="flex-auto p-6">
      <slot />
    </div>

    <footer
      v-if="hasFooterSlot"
      class="flex items-stretch border-t border-gray-100 dark:border-gray-800"
    >
      <div class="flex items-center px-6 py-3 font-bold grow">
        <slot name="footer" />
      </div>
    </footer>
  </div>
</template>
