<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue'

const PokeballDecoration = defineAsyncComponent(() => import('@/components/pokedex/info/PokeballDecoration.vue'))
const PokemonImage = defineAsyncComponent(() => import('@/components/pokedex/info/PokemonImage.vue'))
const PokemonAbout = defineAsyncComponent(() => import('@/components/pokedex/info/about/index.vue'))

const tab = ref('ABOUT')
const tabs = reactive([
  {
    label: 'About',
    value: 'ABOUT'
  },
  {
    label: 'Base Stats',
    value: 'STATS'
  },
  {
    label: 'Evolution',
    value: 'EVOLUTION'
  },
  {
    label: 'Moves',
    value: 'MOVES'
  }
])

const onChangeTab = (newValue = 'ABOUT') => {
  tab.value = newValue
}

const isShowTabAbout = () => tab.value === 'ABOUT'
</script>

<template>
  <section class="relative pt-16">
    <div class="container pokedex-slider">
      <div class="relative flex flex-col w-full min-w-0 -mt-64 break-words shadow-xl bg-slate-100 rounded-t-3xl dark:bg-slate-900">
        <div class="p-6">
          <div class="flex flex-wrap justify-center">
            <div class="flex justify-center w-full px-4 lg:order-2 lg:w-3/12">
              <PokeballDecoration />
              <PokemonImage />
            </div>
          </div>

          <AppTabs
            :tabs="tabs"
            @change="onChangeTab"
          />

          <div class="flex flex-wrap justify-center mt-7 sm:mt-10">
            <div class="w-full lg:w-9/12">
              <PokemonAbout v-if="isShowTabAbout()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
