<script setup>
import { computed, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { PencilAltIcon, TrashIcon } from '@heroicons/vue/solid'

const store = useStore()

const columns = reactive([
  {
    name: 'name', label: 'Name', align: 'left'
  },
  {
    name: 'email', label: 'Email', align: 'left'
  },
  {
    name: 'role', label: 'Role', align: 'left'
  },
  {
    name: 'isEmailVerified', label: 'Email Verified', align: 'left'
  },
  {
    name: 'actions', label: 'Actions', align: 'center'
  }
])

const users = computed(() => store.getters['user/list'])

const getUserList = async () => {
  await store.dispatch('user/getUserList')
}

onMounted(() => {
  getUserList()
})
</script>

<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full px-4 mb-12">
      <AppTable
        title="User List"
        :columns="columns"
      >
        <template #body>
          <tr v-if="!users.length">
            <td
              class="p-4 px-6 text-xs"
              colspan="5"
            >
              No users found
            </td>
          </tr>
          <tr
            v-for="(user, index) in users"
            :key="index"
          >
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ user.name }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ user.email }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ user.role }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ user.isEmailVerified }}
            </td>
            <td class="flex p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 justify-evenly whitespace-nowrap">
              <router-link
                v-slot="{ navigate }"
                :to="{ name: 'usersEdit', params: { id: user.id } }"
              >
                <AppButton
                  color="info"
                  size="xs"
                  @click="navigate"
                >
                  <PencilAltIcon class="w-4 h-4" />
                </AppButton>
              </router-link>

              <AppButton
                color="danger"
                size="xs"
              >
                <TrashIcon class="w-4 h-4" />
              </AppButton>
            </td>
          </tr>
        </template>
      </AppTable>
    </div>
  </div>
</template>
