<script setup>
import { ref } from 'vue'
import { UserCircleIcon } from '@heroicons/vue/solid'
import { useAuth } from '@/composables/auth'

const { logout } = useAuth()

const isShowDropdown = ref(false)

const toggleDropdown = (event) => {
  event.preventDefault()
  isShowDropdown.value = !isShowDropdown.value
}
</script>

<template>
  <div class="relative">
    <a
      class="block"
      href="#"
      @click="toggleDropdown($event)"
    >
      <div class="flex items-center">
        <span class="inline-flex items-center justify-center py-2 rounded-full hover:text-slate-400">
          <UserCircleIcon class="w-6 h-6 align-middle border-none rounded-full shadow-lg" />
        </span>
      </div>
    </a>

    <div
      class="absolute right-0 z-50 py-2 text-base list-none bg-white rounded shadow-lg dark:bg-slate-900 min-w-48"
      :class="{ block: isShowDropdown, hidden: !isShowDropdown }"
      @click="toggleDropdown($event)"
    >
      <router-link
        class="block w-full px-4 py-2 text-sm font-normal whitespace-nowrap"
        :to="{ name: 'profile' }"
      >
        Profile
      </router-link>

      <hr class="my-2 md:min-w-full">

      <a
        href="javascript:void(0);"
        class="block w-full px-4 py-2 text-sm font-normal whitespace-nowrap"
        @click="logout"
      >
        Logout
      </a>
    </div>
  </div>
</template>
