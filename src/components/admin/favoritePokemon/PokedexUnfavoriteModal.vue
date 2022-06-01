<script setup>
import { HeartIcon } from '@heroicons/vue/outline'
import { useFavoritePokemon } from '@/composables/favoritePokemon'

const {
  closeModal,
  favoritePokemonSelected,
  getFavoritePokemonList,
  isLoadingButton,
  isShowModal,
  setIsFavoritePokemon
} = useFavoritePokemon()

const onSubmit = async () => {
  await setIsFavoritePokemon(favoritePokemonSelected.value)
  await getFavoritePokemonList()
  closeModal()
}
</script>

<template>
  <AppModal
    :show="isShowModal"
    @close="closeModal"
  >
    <template #default>
      <div class="sm:flex sm:items-start">
        <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
          <HeartIcon
            class="w-6 h-6 text-blue-600"
            aria-hidden="true"
          />
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3
            id="modal-title"
            class="text-lg font-medium leading-6"
          >
            Favorite Pokémon
          </h3>
          <div class="mt-2">
            <p class="text-sm">
              Are you sure you want to cancel this Pokémon from your favorite?
            </p>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="grid gap-3 pt-4 sm:pt-6 sm:flex sm:flex-row-reverse">
        <AppButton
          class="w-full sm:w-auto"
          color="info"
          size="sm"
          :loading="isLoadingButton"
          @click="onSubmit"
        >
          Confirm
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
