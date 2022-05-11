<script setup>
import { usePokemon } from '@/composables/pokemon.js'

const { pokemonHeight, pokemonWeight } = usePokemon()
</script>

<template>
  <div class="bg-white shadow-xl rounded-2xl dark:bg-slate-800">
    <div class="px-6 py-4">
      <div class="grid grid-cols-2">
        <div>
          <div class="text-slate-400">
            Height
          </div>
          {{ pokemonHeight }}
        </div>
        <div>
          <div class="text-slate-400">
            Weight
          </div>
          {{ pokemonWeight }}
        </div>
      </div>
    </div>
  </div>
</template>
