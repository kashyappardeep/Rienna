const API_BASE_URL = String(import.meta.env.VITE_API_BASE_URL || '').trim().replace(/\/+$/, '')

const buildUrl = (path) => {
  const normalizedPath = String(path || '').startsWith('/') ? path : `/${path}`
  return `${API_BASE_URL}${normalizedPath}`
}

export const isApiConfigured = () => Boolean(API_BASE_URL)

export const apiRequest = async (path, options = {}) => {
  if (!isApiConfigured()) {
    throw new Error('API_BASE_URL_NOT_CONFIGURED')
  }

  const { method = 'GET', body, headers = {}, signal } = options
  const response = await fetch(buildUrl(path), {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  })

  const contentType = response.headers.get('content-type') || ''
  const isJson = contentType.includes('application/json')
  const payload = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    const message =
      (payload && typeof payload === 'object' && (payload.message || payload.error)) ||
      `Request failed with status ${response.status}`
    throw new Error(String(message))
  }

  return payload
}

