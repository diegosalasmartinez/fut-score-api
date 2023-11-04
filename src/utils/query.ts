export const getQueryParams = (body?: object) => {
  if (!body) return ''
  
  const params = []

  for (const [key, value] of Object.entries(body)) {
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  }

  return params.join('&')
}
