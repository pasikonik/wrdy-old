const BASE_URL = 'http://localhost:2300';

async function basicHandle(res) {
  if (!res.ok) {
    throw new Error(res.status);
  }

  const data = await res.json();
  return data;
}

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const API = {
  async get(endpoint) {
    const res = await fetch(BASE_URL + endpoint);

    basicHandle(res);
  },
  async post(endpoint, body) {
    const res = await fetch(BASE_URL + endpoint, {
      headers,
      method: 'post',
      body: JSON.stringify(body)
    });

    basicHandle(res);
  }
};

export default API;
