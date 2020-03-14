const BASE_URL = process.env.VUE_APP_API_URL

function basicHandle(res) {
  if (!res.ok) {
    throw new Error(res.status)
  }

  return res.json()
}

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${sessionStorage.getItem('token')}`
})

const API = {
  async get(endpoint) {
    const res = await fetch(BASE_URL + endpoint, { headers })

    return await basicHandle(res)
  },
  async post(endpoint, body) {
    const res = await fetch(BASE_URL + endpoint, {
      headers,
      method: 'post',
      body: JSON.stringify(body)
    })

    return await basicHandle(res)
  }
}

export default API
