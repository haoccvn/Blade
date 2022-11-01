import AsyncStorage from '@react-native-async-storage/async-storage'

export async function loadFromStorage(key) {
  try {
    const almostThere = await AsyncStorage.getItem(key)
    return JSON.parse(almostThere)
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveToStorage(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function removeFromStorage(key) {
  try {
    await AsyncStorage.removeItem(key)
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear() {
  try {
    await AsyncStorage.clearStorage()
  } catch {}
}

export async function loadAllKeysFromStorage() {
  try {
    return JSON.parse(await AsyncStorage.getAllKeys())
  } catch {
    return null
  }
}
