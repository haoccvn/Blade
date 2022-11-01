import { Alert } from 'react-native'

/* defined func in here */
export const showDialog = async ({ title, desc, buttons }) => {
  Alert.alert(title, desc, buttons)
}
