import { computed, ref } from 'vue'

export const useNavbar = () => {
  // Data
  const isNavbarScrolled = ref(false)

  // Computed
  const navbarComputedClass = computed(() => {
    if (isNavbarScrolled.value) return 'shadow-xl bg-slate-100 dark:bg-slate-800'
    return 'bg-transparent'
  })

  // Method
  const navbarHandleScroll = () => {
    if (window.scrollY > 10) {
      isNavbarScrolled.value = true
    } else {
      isNavbarScrolled.value = false
    }
  }

  return {
    isNavbarScrolled,
    navbarComputedClass,
    navbarHandleScroll
  }
}
