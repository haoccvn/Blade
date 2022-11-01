import { setLoading } from '@proxies'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import { axiosDefaultConfig, helperDefault } from './config'
import { METHODS, RETRY_COUNT } from './constants'
import { handleError } from './utils'

// Create axios instances
export const client = axios.create(axiosDefaultConfig)

// Set retry count and delay between request
axiosRetry(client, {
  retryDelay: axiosRetry.exponentialDelay,
  retries: RETRY_COUNT,
})
// method = 'GET' | 'PUT' | 'POST' | 'DELETE'
export const APIRequest = async ({
  method = METHODS.GET,
  endpoint,
  body,
  requestConfig,
  helper,
}) => {
  const helperConfig = {
    ...helperDefault,
    ...helper,
  }
  const request = async () => {
    switch (method) {
      case METHODS.GET:
        return await client.get(endpoint, requestConfig)
      case METHODS.PUT:
        return await client.put(endpoint, body, requestConfig)
      case METHODS.POST:
        return await client.post(endpoint, body, requestConfig)
      case METHODS.DELETE:
        return await client.delete(endpoint, requestConfig)
      default:
        throw Error('METHOD invalid!!!')
    }
  }
  try {
    helperConfig.loadingEffectEnabled && setLoading(true)
    const response = await request()
    const data = response.data
    return { kind: 'ok', data }
  } catch (error) {
    return handleError(error, helperConfig)
  } finally {
    helperConfig.loadingEffectEnabled && setLoading(false)
  }
}
