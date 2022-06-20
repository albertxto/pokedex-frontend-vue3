<script setup>
import { defineAsyncComponent } from 'vue'
import { usePokemon } from '@/composables/pokemon'

const PokedexField = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexField.vue'))
const PokedexGenderField = defineAsyncComponent(() => import('@/components/pokedex/info/about/PokedexGenderField.vue'))
const PokedexSection = defineAsyncComponent(() => import('@/components/pokedex/info/PokedexSection.vue'))

const { pokemonEggGroups, pokemonGenders } = usePokemon()

const isPokemonGenderless = () => typeof pokemonGenders.value === 'string'
</script>

<template>
  <PokedexSection
    id="pokemon-breeding"
    label="Breeding"
  >
    <PokedexField label="Gender">
      <template v-if="isPokemonGenderless()">
        {{ pokemonGenders }}
      </template>
      <div
        v-else
        class="flex flex-wrap"
      >
        <PokedexGenderField
          :gender="pokemonGenders[0].label"
          :value="pokemonGenders[0].value"
        />
        <PokedexGenderField
          :gender="pokemonGenders[1].label"
          :value="pokemonGenders[1].value"
        />
      </div>
    </PokedexField>

    <PokedexField label="Egg Groups">
      <span class="capitalize">{{ pokemonEggGroups }}</span>
    </PokedexField>
  </PokedexSection>
</template>
