const BASE_URL = 'http://127.0.0.1:5000'

export const post = async (route, body) => {
  const resp = await fetch(`${BASE_URL}/${route}`, {
    method: 'POST',
    body: JSON.stringify(body),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const json = await resp.json()
  return json
}

export const getTickets = async () => {
  const resp = await fetch(`${BASE_URL}/tickets`)
  const json = await resp.json()
  return json
}

export const updateTicket = async (id, body) => {
  const resp = await fetch(`${BASE_URL}/tickets/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const json = await resp.json()
  return json
}