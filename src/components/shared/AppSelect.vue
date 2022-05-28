<script setup>
import { computed } from 'vue'
import { colorsRingFocus } from '@/config/colors'

const props = defineProps({
  borderless: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [Number, String],
    default: null
  },
  options: {
    type: Array,
    default () {
      return []
    }
  },
  placeholder: {
    type: String,
    default: ''
  },
  transparent: {
    type: Boolean,
    default: false
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
    colorsRingFocus.primary,
    props.borderless ? 'border-0' : 'border',
    props.transparent ? 'bg-transparent' : 'bg-white'
  ]
  return base
})
</script>

<template>
  <div class="flex rounded-md shadow-sm">
    <select
      v-model="computedValue"
      class="flex-1 block w-full text-sm capitalize border-gray-300 rounded dark:bg-slate-800 dark:border-gray-400"
      :class="componentClass"
      :disabled="disabled"
      :placeholder="placeholder"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        class="capitalize"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
