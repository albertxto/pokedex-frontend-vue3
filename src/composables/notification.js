import { ref } from 'vue'

export const useNotification = () => {
  // Data
  const errorMessage = ref('')
  const successMessage = ref('')

  // Method
  const dismissAllNotifications = () => {
    successMessage.value = ''
    errorMessage.value = ''
  }
  const dismissErrorNotification = () => {
    errorMessage.value = ''
  }
  const dismissSuccessNotification = () => {
    successMessage.value = ''
  }

  return {
    dismissAllNotifications,
    dismissErrorNotification,
    dismissSuccessNotification,
    errorMessage,
    successMessage
  }
}
