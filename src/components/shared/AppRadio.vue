<script setup>
import { computed } from 'vue'
import { colorRingFocus } from '@/config/colors'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  val: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  }
})

const componentClass = computed(() => {
  const base = [
    colorRingFocus
  ]
  return base
})
</script>

<template>
  <div class="form-check">
    <label class="inline-flex items-center cursor-pointer">
      <input
        v-model="computedValue"
        class="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
        type="radio"
        :class="componentClass"
        :name="name"
        :value="val"
      >
      {{ label }}
    </label>
  </div>
</template>
