const BASE_URL = process.env.VUE_APP_API_URL

const headers = new Headers({
  Accept: 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
  Authorization: `Bearer ${sessionStorage.getItem('token')}`,
})

function basicHandle(res) {
  if (!res.ok) {
    throw new Error(res.status)
  }

  return res.json()
}

const api = {
  async get(endpoint) {
    const res = await fetch(BASE_URL + endpoint, {
      headers,
      method: 'get',
    })

    return await basicHandle(res)
  },
  async post(endpoint, body) {
    const res = await fetch(BASE_URL + endpoint, {
      headers,
      method: 'post',
      body: JSON.stringify(body),
    })

    return await basicHandle(res)
  },
}

export default api
