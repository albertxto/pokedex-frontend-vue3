<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
          <h5 class="text-xs font-bold uppercase text-blueGray-400">
            {{ statSubtitle }}
          </h5>
          <span class="text-xl font-semibold text-blueGray-700">
            {{ statTitle }}
          </span>
        </div>
        <div class="relative flex-initial w-auto pl-4">
          <div
            class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white rounded-full shadow-lg"
            :class="[statIconColor]"
          >
            <slot name="icon" />
          </div>
        </div>
      </div>
      <p class="flex mt-4 text-sm text-blueGray-400">
        <span
          class="flex mr-2"
          :class="[statPercentColor]"
        >
          <ArrowSmUpIcon
            v-if="statArrow === 'up'"
            class="w-5 h-5"
          />
          <ArrowSmDownIcon
            v-else
            class="w-5 h-5"
          />
          {{ statPercent }}%
        </span>
        <span class="whitespace-nowrap">{{ statDescripiron }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'

export default {
  name: 'CardStats',
  components: {
    ArrowSmDownIcon,
    ArrowSmUpIcon
  },
  props: {
    statSubtitle: {
      type: String,
      default: 'Traffic'
    },
    statTitle: {
      type: String,
      default: '350,897'
    },
    statArrow: {
      default: 'up',
      validator: function (value) {
        // The value must match one of these strings
        return ['up', 'down'].indexOf(value) !== -1
      }
    },
    statPercent: {
      type: String,
      default: '3.48'
    },
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: {
      type: String,
      default: 'text-emerald-500'
    },
    statDescripiron: {
      type: String,
      default: 'Since last month'
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: 'bg-red-500'
    }
  }
}
</script>
