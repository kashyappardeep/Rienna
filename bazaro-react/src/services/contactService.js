import { apiRequest } from './apiClient'

export const submitContactMessage = async (payload) =>
  apiRequest('/contact', {
    method: 'POST',
    body: payload,
  })

