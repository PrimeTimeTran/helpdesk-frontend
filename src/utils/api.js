
export const post = async (route, body) => {
  const resp = await fetch(`http://127.0.0.1:5000/${route}`, {
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