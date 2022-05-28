<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue'

const PokemonAbout = defineAsyncComponent(() => import('@/components/pokedex/info/about/index.vue'))
const PokemonBaseStats = defineAsyncComponent(() => import('@/components/pokedex/info/baseStats/index.vue'))
const PokemonEvolution = defineAsyncComponent(() => import('@/components/pokedex/info/evolution/index.vue'))

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
    disable: true,
    label: 'Moves',
    value: 'MOVES'
  }
])

const onChangeTab = (newValue = 'ABOUT') => {
  tab.value = newValue
}

const isShowTabAbout = () => tab.value === 'ABOUT'
const isShowTabBaseStats = () => tab.value === 'STATS'
const isShowTabEvolution = () => tab.value === 'EVOLUTION'
</script>

<template>
  <section class="relative">
    <div class="container pokedex-slider">
      <div class="z-50 flex flex-col w-full min-w-0 -mt-48 break-words shadow-xl min-h-screen-60 sm:-mt-32 bg-slate-100 rounded-t-3xl dark:bg-slate-900">
        <div class="p-6">
          <AppTabs
            :tabs="tabs"
            @change="onChangeTab"
          />

          <div class="flex flex-wrap justify-center mt-7 sm:mt-10">
            <div class="w-full lg:w-9/12">
              <KeepAlive>
                <PokemonAbout v-if="isShowTabAbout()" />
                <PokemonBaseStats v-else-if="isShowTabBaseStats()" />
                <PokemonEvolution v-else-if="isShowTabEvolution()" />
              </KeepAlive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
