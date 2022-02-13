<script setup>
import { computed, useSlots } from 'vue'
import { CheckCircleIcon, ExclamationCircleIcon, XIcon } from '@heroicons/vue/solid'
import { colorsBg, colorsBorders, colorsOutline } from '@/config/colors'

const props = defineProps({
  color: {
    type: String,
    default: 'white'
  },
  icon: {
    type: String,
    default: null
  },
  outline: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['dismiss'])
const dismiss = () => {
  emit('dismiss')
}

const componentClass = computed(() => props.outline
  ? colorsOutline[props.color]
  : [colorsBg[props.color], colorsBorders[props.color]])

const isColorDanger = computed(() => {
  return props.color === 'danger'
})
const isColorSuccess = computed(() => {
  return props.color === 'success'
})

const slots = useSlots()
const hasRightSlot = computed(() => slots.right)
</script>

<template>
  <div
    :class="componentClass"
    class="px-3 py-6 mx-6 mb-6 text-white transition-colors duration-150 border rounded md:py-3 md:mx-0 last:mb-0"
  >
    <div class="items-center justify-between block md:flex">
      <div class="flex items-center justify-center mb-6 md:mb-0">
        <div class="flex flex-col items-center md:flex-row">
          <CheckCircleIcon
            v-if="isColorSuccess"
            class="w-10 h-10 md:mr-2"
          />
          <ExclamationCircleIcon
            v-if="isColorDanger"
            class="w-10 h-10 md:mr-2"
          />
          <span class="text-center md:text-left">
            <slot />
          </span>
        </div>
      </div>
      <div class="flex items-center justify-center shrink-0 grow-0">
        <slot
          v-if="hasRightSlot"
          name="right"
        />
        <AppButton
          v-else
          size="sm"
          :color="color"
          :outline="outline"
          @click="dismiss"
        >
          <XIcon class="w-4 h-4" />
        </AppButton>
      </div>
    </div>
  </div>
</template>
