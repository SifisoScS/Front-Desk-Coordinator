import { toast } from 'react-toastify'

export const useToast = () => {
  const showSuccess = (message) => {
    toast.success(message)
  }

  const showError = (message) => {
    toast.error(message)
  }

  const showInfo = (message) => {
    toast.info(message)
  }

  const showWarning = (message) => {
    toast.warning(message)
  }

  const showToast = (message, options = {}) => {
    toast(message, options)
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
    showToast
  }
}
