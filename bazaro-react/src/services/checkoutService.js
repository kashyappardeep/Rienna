import { apiRequest } from './apiClient'

export const placeOrder = async (payload) =>
  apiRequest('/orders', {
    method: 'POST',
    body: payload,
  })

export const createInrPaymentOrder = async ({ amount, currency = 'INR', receipt }) =>
  apiRequest('/payments/inr/create-order', {
    method: 'POST',
    body: { amount, currency, receipt },
  })

export const verifyInrPayment = async (payload) =>
  apiRequest('/payments/inr/verify', {
    method: 'POST',
    body: payload,
  })

export const createUsdtIntent = async ({ usd_amount, network = 'TRON-NILE' }) =>
  apiRequest('/payments/usdt/create-intent', {
    method: 'POST',
    body: { usd_amount, network },
  })

export const checkUsdtIntentStatus = async (payload) =>
  apiRequest('/payments/usdt/check-intent', {
    method: 'POST',
    body: payload,
  })

