<script setup>
import { thousandSeparator } from '@/utils/stringFormat'

defineProps({
  subtitle: {
    type: String,
    default: null
  },
  title: {
    type: Number,
    default: 0
  },
  iconColor: {
    type: String,
    default: 'bg-red-500'
  }
})
</script>

<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
    <div class="flex-auto p-5">
      <div class="flex flex-wrap">
        <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
          <h5 class="text-xs font-bold uppercase text-slate-400">
            {{ subtitle }}
          </h5>
          <span class="text-xl font-semibold text-slate-700">
            {{ thousandSeparator(title) }}
          </span>
        </div>

        <div class="relative flex-initial w-auto pl-4">
          <div
            class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white rounded-full shadow-lg"
            :class="[iconColor]"
          >
            <slot name="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
