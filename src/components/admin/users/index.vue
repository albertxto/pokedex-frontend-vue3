<script setup>
import { computed, defineAsyncComponent, reactive } from 'vue'
import { PencilAltIcon, PlusIcon, TrashIcon } from '@heroicons/vue/solid'
import { useUser } from '@/composables/user.js'
import store from '@/store'

const DeleteUserModal = defineAsyncComponent(() => import('@/components/admin/users/delete/DeleteUserModal.vue'))

const { getUserList, openModal, users } = useUser()

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

const currentUser = computed(() => store.getters['auth/currentUser'])

const isShowDeleteButton = (userId = '') => {
  return currentUser.value.id !== userId
}

getUserList()
</script>

<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <AppTable :columns="columns">
        <template #header>
          <div class="w-1/2">
            <h3 class="text-lg font-semibold">
              User List
            </h3>
          </div>

          <div class="w-1/2 text-right">
            <router-link
              v-slot="{ navigate }"
              :to="{ name: 'usersAdd' }"
            >
              <AppButton
                color="success"
                size="xs"
                @click="navigate"
              >
                <PlusIcon class="w-4 h-4 mr-1" />
                Add
              </AppButton>
            </router-link>
          </div>
        </template>

        <template #default>
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
            <td class="flex gap-3 p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
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
                v-if="isShowDeleteButton(user.id)"
                color="danger"
                size="xs"
                @click="openModal(user.id, user.email)"
              >
                <TrashIcon class="w-4 h-4" />
              </AppButton>
            </td>
          </tr>
        </template>
      </AppTable>
    </div>
  </div>

  <DeleteUserModal />
</template>
