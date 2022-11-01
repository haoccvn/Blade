import Config from 'react-native-config'
import { TIME_OUT } from '../constants'

// Axios default config
export const axiosDefaultConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: TIME_OUT,
  headers: { Accept: 'application/json' },
}

// Help before, during, and after a request is called
export const helperDefault = {
  showErrorPopup: true,
  returnOriginalResponse: false,
  loadingEffectEnabled: true,
}
