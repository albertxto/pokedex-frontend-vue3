<script setup>
defineProps({
  colspan: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <td
    class="px-6 py-4 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
    :colspan="colspan"
  >
    <slot />
  </td>
</template>
