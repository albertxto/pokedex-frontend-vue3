<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { PencilAltIcon, PlusIcon, TrashIcon } from '@heroicons/vue/solid'
import { useAuth } from '@/composables/auth'
import { useUser } from '@/composables/user'
import { roles as userRolesConfig } from '@/config/user'

const DeleteUserModal = defineAsyncComponent(() => import('@/components/admin/users/delete/DeleteUserModal.vue'))

const { currentUserId, currentUserRole, isUserRoleAdmin } = useAuth()
const { openModal } = useUser()
const { getUserList, isLoading, isLoadMore, userList } = useUser()

const columns = computed(() => {
  const array = [
    { name: 'name', label: 'Name', align: 'left' },
    { name: 'email', label: 'Email', align: 'left' },
    { name: 'role', label: 'Role', align: 'left' },
    { name: 'isEmailVerified', label: 'Email Verified', align: 'left' }
  ]
  if (isUserRoleAdmin(currentUserRole.value)) {
    array.push({ name: 'actions', label: 'Actions', align: 'center' })
  }
  return array
})

const isShowDeleteButton = (userId = '') => currentUserId.value !== userId

const userRoleLabel = (role = '') => userRolesConfig[role]?.label || ''

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

          <div
            v-if="isUserRoleAdmin(currentUserRole)"
            class="w-1/2 text-right"
          >
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
          <tr v-if="!userList.length">
            <td
              class="p-4 px-6 text-sm"
              colspan="5"
            >
              No users found
            </td>
          </tr>
          <tr
            v-for="(user, index) in userList"
            v-else
            :key="index"
          >
            <td class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ user.name }}
            </td>
            <td class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ user.email }}
            </td>
            <td class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ userRoleLabel(user.role) }}
            </td>
            <td class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ user.isEmailVerified }}
            </td>
            <td
              v-if="isUserRoleAdmin(currentUserRole)"
              class="flex gap-3 p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
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

    <div
      v-if="isLoadMore"
      class="mx-auto mt-6"
    >
      <AppButton
        color="primary"
        size="sm"
        :loading="isLoading"
        @click="getUserList(true)"
      >
        Load More
      </AppButton>
    </div>
  </div>

  <DeleteUserModal v-if="isUserRoleAdmin(currentUserRole)" />
</template>
