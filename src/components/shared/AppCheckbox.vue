<script setup>
import { computed } from 'vue'
import { colorsRingFocus } from '@/config/colors'

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: null
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const componentClass = computed(() => {
  const base = [
    colorsRingFocus.primary
  ]
  return base
})
</script>

<template>
  <div>
    <label class="inline-flex items-center cursor-pointer">
      <input
        v-model="computedValue"
        type="checkbox"
        class="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-slate-700"
        :class="componentClass"
      >
      <span class="ml-2 text-sm font-semibold">
        {{ label }}
      </span>
    </label>
  </div>
</template>
