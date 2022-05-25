<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { DesktopComputerIcon, DeviceMobileIcon, UsersIcon } from '@heroicons/vue/solid'

const UserDropdown = defineAsyncComponent(() => import('@/components/headers/UserDropdown.vue'))

const collapseShow = ref('hidden')
const toggleCollapseShow = (classes) => {
  collapseShow.value = classes
}
</script>

<template>
  <nav class="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl dark:bg-slate-900/70 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
    <div class="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
      <!-- Toggler -->
      <button
        class="px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded cursor-pointer md:hidden"
        type="button"
        @click="toggleCollapseShow('bg-white dark:bg-slate-900 m-2 py-3 px-6')"
      >
        <MenuIcon class="w-5 h-5" />
      </button>

      <!-- Brand -->
      <router-link
        class="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-slate-600 dark:text-slate-300 whitespace-nowrap"
        to="/"
      >
        Pokedex
      </router-link>

      <!-- User -->
      <ul class="flex flex-wrap items-center list-none md:hidden">
        <li class="relative inline-block">
          <UserDropdown />
        </li>
      </ul>

      <!-- Collapse -->
      <div
        class="absolute top-0 left-0 right-0 z-40 items-center flex-1 h-auto overflow-x-hidden overflow-y-auto rounded shadow md:flex md:flex-col md:items-stretch md:relative md:mt-4 md:shadow-none"
        :class="collapseShow"
      >
        <!-- Collapse header -->
        <div class="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-slate-200">
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-slate-600 dark:text-slate-300 whitespace-nowrap"
                to="/"
              >
                Pokedex
              </router-link>
            </div>
            <div class="flex justify-end w-6/12">
              <button
                type="button"
                class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded cursor-pointer dark:text-white md:hidden"
                @click="toggleCollapseShow('hidden')"
              >
                <XIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Heading -->
        <h6
          class="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500"
        >
          Admin Layout Pages
        </h6>

        <!-- Navigation -->
        <ul class="flex flex-col list-none md:flex-col md:min-w-full">
          <li class="items-center">
            <router-link
              v-slot="{ href, navigate, isActive }"
              to="/admin/dashboard"
            >
              <a
                :href="href"
                class="flex py-3 text-xs font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-400'
                ]"
                @click="navigate"
              >
                <DesktopComputerIcon class="w-4 h-4 mr-2" />
                Dashboard
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              v-slot="{ href, navigate, isActive }"
              :to="{ name: 'users' }"
            >
              <a
                :href="href"
                class="flex py-3 text-xs font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-400'
                ]"
                @click="navigate"
              >
                <UsersIcon class="w-4 h-4 mr-2" />
                Users
              </a>
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full">

        <!-- Heading -->
        <h6 class="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
          Pokedex Layout Pages
        </h6>

        <!-- Navigation -->
        <ul class="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
          <li class="items-center">
            <router-link
              class="flex py-3 text-xs font-bold uppercase text-slate-700 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-400"
              :to="{ 'name': 'pokedex' }"
            >
              <DeviceMobileIcon class="w-4 h-4 mr-2" />
              Pokedex
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
