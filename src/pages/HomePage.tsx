import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
export default function HomePage() {
  const [text, setText] = useState('')
  const [quotes, setQuotes] = useState([])

  const onChange = (e: { target: { value: any; }; }) => {
    console.log(e.target.value);
    setText(e.target.value)
  }

  const onSubmit = async () => {
    console.log({ text });
    const resp = await fetch('http://127.0.0.1:5000/ticket', {
      method: 'POST',
      body: JSON.stringify({ text: text, bar: 'sososos', gello: 'wowowow' }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const json = await resp.json()
    console.log({ json });
    setText('')
  }

  useEffect(() => {
    async function fetchStoic() {
      const resp = await fetch('https://stoicquotesapi.com/v1/api/quotes')
      const json = await resp.json()
      setQuotes(json.data)
    }
    fetchStoic()
  }, [])

  return (
    <>
      <div>HomePage</div>
      <input onChange={onChange} />
      <button onClick={onSubmit}>Create Ticket</button>
      <Container className='mt-5'>
        {quotes && quotes.map(q => {
          return <div key={q.id}>
            <q>{q.body}</q>
            <br></br>
            <strong>{q.author}</strong>
            <br></br>
            <br></br>
            <br></br>
          </div>
        })}

      </Container>
    </>
  )
}
