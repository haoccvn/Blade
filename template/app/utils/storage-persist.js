import {
  loadAllKeysFromStorage,
  loadFromStorage,
  removeFromStorage,
  saveToStorage,
} from './storage'

export const storage = {
  getItem: name => loadFromStorage(name),
  setItem: (name, value) => saveToStorage(name, value),
  removeItem: name => removeFromStorage(name),
  getAllKeys: () => loadAllKeysFromStorage(),
}
