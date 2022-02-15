<script setup>
defineProps({
  columns: {
    type: Array,
    default () {
      return []
    }
  },
  title: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="relative flex flex-col w-full min-w-0 break-words bg-white rounded shadow-lg dark:bg-slate-900">
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 class="text-lg font-semibold">
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              v-for="(column, index) in columns"
              :key="index"
              class="px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-100 dark:border-slate-700 whitespace-nowrap"
              :class="`text-${column.align}`"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <slot name="body" />
        </tbody>
      </table>
    </div>
  </div>
</template>
