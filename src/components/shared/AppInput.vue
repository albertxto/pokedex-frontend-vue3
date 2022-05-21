<script setup>
import { computed, ref, useSlots } from 'vue'
import { EyeIcon, EyeOffIcon } from '@heroicons/vue/solid'
import { colorsRingFocus } from '@/config/colors'

const props = defineProps({
  borderless: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  transparent: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  }
})

const slots = useSlots()
const hasLeftSlot = computed(() => slots.left)
const hasRightSlot = computed(() => slots.right)

const emit = defineEmits(['update:modelValue'])
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const isShowPassword = ref(false)
const toggleIsShowPassword = () => {
  isShowPassword.value = !isShowPassword.value
}

const computedType = computed(() => {
  if (props.type === 'password') {
    return isShowPassword.value ? 'text' : props.type
  }
  return props.type
})
const isTypePassword = computed(() => props.type === 'password')

const componentClass = computed(() => {
  const base = [
    colorsRingFocus.primary,
    props.borderless ? 'border-0' : 'border',
    props.transparent ? 'bg-transparent' : 'bg-white'
  ]
  if (hasLeftSlot.value) {
    base.push('rounded-l-none')
  }
  if (hasRightSlot.value || isTypePassword.value) {
    base.push('rounded-r-none')
  }
  return base
})
</script>

<template>
  <div class="flex rounded-md shadow-sm">
    <span
      v-if="hasLeftSlot"
      class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-r-0 border-gray-300 dark:bg-gray-800 dark:border-gray-400 rounded-l-md"
    >
      <slot name="left" />
    </span>

    <input
      v-model="computedValue"
      class="flex-1 block w-full border-gray-300 rounded dark:bg-slate-800 dark:border-gray-400 sm:text-sm"
      :class="componentClass"
      :placeholder="placeholder"
      :type="computedType"
    >

    <span
      v-if="hasRightSlot"
      class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-l-0 border-gray-300 dark:border-gray-400 rounded-r-md"
    >
      <slot name="right" />
    </span>

    <AppButton
      v-if="isTypePassword"
      class="text-gray-500 border-l-0 rounded-l-none"
      color="light"
      size="xs"
      @click="toggleIsShowPassword"
    >
      <EyeOffIcon
        v-if="isShowPassword"
        class="w-4 h-4"
      />
      <EyeIcon
        v-else
        class="w-4 h-4"
      />
    </AppButton>
  </div>
</template>
