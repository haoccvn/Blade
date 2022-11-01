import { proxy, ref } from 'valtio'
import { derive } from 'valtio/utils'

export const app = proxy({
  isLoading: false,
})

export const appDerive = derive({})

/* defined func in here */
export const onChange = async () => {
  /* your code */
}
export const setLoading = isLoading => {
  app.isLoading = isLoading
}
