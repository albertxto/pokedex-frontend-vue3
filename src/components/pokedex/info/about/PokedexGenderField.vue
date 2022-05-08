<script setup>
import { computed } from 'vue'
import PokemonMaleIcon from '@/assets/images/male.png'
import PokemonFemaleIcon from '@/assets/images/female.png'

const props = defineProps({
  gender: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})

const isGenderMale = computed(() => props.gender === 'MALE')
const isGenderFemale = computed(() => props.gender === 'FEMALE')
const genderIcon = computed(() => isGenderMale.value ? PokemonMaleIcon : PokemonFemaleIcon)
</script>

<template>
  <div class="flex flex-wrap items-center w-5/12 gap-2 sm:w-4/12">
    <img
      class="object-cover"
      :class="{ 'w-3': isGenderMale, 'w-2': isGenderFemale }"
      :src="genderIcon"
    >
    {{ value }}
  </div>
</template>
