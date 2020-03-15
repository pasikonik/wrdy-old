const BASE_URL = process.env.VUE_APP_API_URL

const getToken = () => sessionStorage.getItem('token')

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`
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
      method: 'get'
    })

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

export default api
