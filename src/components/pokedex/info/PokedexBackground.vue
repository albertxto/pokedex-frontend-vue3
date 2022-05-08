<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { types as pokemonTypes } from '@/config/pokemon'

const store = useStore()

const isLoading = computed(() => store.getters['pokemon/isLoading'])
const name = computed(() => store.getters['pokemon/name'])
const types = computed(() => store.getters['pokemon/types'])

const componentClass = computed(() => isLoading.value
  ? 'bg-slate-400 animate-pulse'
  : pokemonTypes[types.value[0]].color
)
</script>

<template>
  <section class="relative block h-600-px">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      :class="componentClass"
    >
      <div class="px-6 mt-10 text-white">
        <h1 class="text-3xl font-bold capitalize">
          {{ name }}
        </h1>
      </div>
    </div>
  </section>
</template>
