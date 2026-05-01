import { apiRequest } from './apiClient'

export const loginUser = async ({ email, password }) =>
  apiRequest('/login', {
    method: 'POST',
    body: { email, password },
  })

export const registerUser = async ({ name, email, phone, password, referralCode }) =>
  apiRequest('/register', {
    method: 'POST',
    body: {
      name,
      email,
      phone,
      password,
      ...(referralCode ? { referral_code: referralCode } : {}),
    },
  })

export const logoutUser = async () =>
  apiRequest('/logout', {
    method: 'POST',
  })

