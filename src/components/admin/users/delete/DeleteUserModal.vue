<script setup>
import { ExclamationIcon } from '@heroicons/vue/outline'
import { useUser } from '@/composables/user.js'

const { closeModal, deleteUser, isLoading, isShowModal, userEmail } = useUser()
</script>

<template>
  <AppModal
    :show="isShowModal"
    @close="closeModal"
  >
    <template #default>
      <div class="sm:flex sm:items-start">
        <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationIcon
            class="w-6 h-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3
            id="modal-title"
            class="text-lg font-medium leading-6"
          >
            Delete account
          </h3>
          <div class="mt-2">
            <p class="text-sm">
              Are you sure you want to delete "{{ userEmail }}" account? All of this data will be
              permanently removed. This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="grid gap-3 pt-4 sm:pt-6 sm:flex sm:flex-row-reverse">
        <AppButton
          class="w-full sm:w-auto"
          color="danger"
          size="sm"
          :loading="isLoading"
          @click="deleteUser"
        >
          Delete
        </AppButton>
        <AppButton
          class="w-full sm:w-auto"
          color="white"
          size="sm"
          @click="closeModal"
        >
          Cancel
        </AppButton>
      </div>
    </template>
  </AppModal>
</template>
