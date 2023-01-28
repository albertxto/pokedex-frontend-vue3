<script setup>
import { defineAsyncComponent } from 'vue'
import { CircleStackIcon, HeartIcon, UserGroupIcon } from '@heroicons/vue/24/solid'
import { useFavoritePokemon } from '@/composables/favoritePokemon'
import { useUser } from '@/composables/user'
import { count as pokemonCount } from '@/config/pokemon'

const CardStats = defineAsyncComponent(() => import('@/components/admin/dashboard/CardStats.vue'))

const { getFavoritePokemonListCount, favoritePokemonListCount } = useFavoritePokemon()
const { getUserListCount, userListCount } = useUser()

getUserListCount()
getFavoritePokemonListCount()
</script>

<template>
  <div class="container">
    <div class="grid items-center justify-between grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10">
      <CardStats
        subtitle="POKÉMON"
        :title="pokemonCount"
        icon-color="bg-red-500"
      >
        <template #icon>
          <CircleStackIcon class="w-5 h-5" />
        </template>
      </CardStats>

      <CardStats
        subtitle="USERS"
        :title="userListCount"
        icon-color="bg-orange-500"
      >
        <template #icon>
          <UserGroupIcon class="w-5 h-5" />
        </template>
      </CardStats>

      <CardStats
        subtitle="FAVORITES"
        :title="favoritePokemonListCount"
        icon-color="bg-pink-500"
      >
        <template #icon>
          <HeartIcon class="w-5 h-5" />
        </template>
      </CardStats>
    </div>
  </div>
</template>
