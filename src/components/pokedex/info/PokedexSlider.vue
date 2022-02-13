<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PokeballDecoration from '@/components/pokedex/info/PokeballDecoration.vue'
import PokemonImage from '@/components/pokedex/info/PokemonImage.vue'

const store = useStore()
const about = computed(() => store.getters['pokemon/about'])
</script>

<template>
  <section class="relative pt-16">
    <div class="container pokedex-slider">
      <div class="relative flex flex-col w-full min-w-0 -mt-64 break-words shadow-xl bg-slate-200 rounded-t-3xl dark:bg-slate-900">
        <div class="p-6">
          <div class="flex flex-wrap justify-center">
            <div class="flex justify-center w-full px-4 lg:order-2 lg:w-3/12">
              <PokeballDecoration />
              <PokemonImage />
            </div>
          </div>

          <div>
            <AppTabs>
              <AppTab
                active
                label="About"
              />
              <AppTab label="Base Stats" />
              <AppTab label="Evolution" />
              <AppTab label="Moves" />
            </AppTabs>
          </div>

          <div class="mt-10">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12">
                <p class="mb-4 text-lg leading-relaxed">
                  {{ about }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
