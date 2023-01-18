import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { post } from '../utils/api';

interface Quote {
  id: number
  body: string
  author: string
}

interface Ticket {
  name: string
  email: string
  description: string
}

export default function HomePage() {
  const [ticket, setTicket] = useState<Ticket>({ name: 'Loi Tran', email: 'loi@gmail.com', description: 'Enum is kinda buggy' })
  const [quotes, setQuotes] = useState<Quote[]>([])

  const onChange = (attr: string, e: { target: { value: any; }; }) => {
    setTicket({ ...ticket, [attr]: e.target.value })
  }

  const onSubmit = async () => {
    const json = await post('ticket', ticket)
    console.log({ json })
  }

  useEffect(() => {
    async function fetchStoic() {
      const resp = await fetch('https://stoicquotesapi.com/v1/api/quotes')
      const json = await resp.json()
      const quotes = json.data
      const item = quotes[Math.floor(Math.random() * quotes.length)];

      setQuotes([item])
    }
    fetchStoic()
  }, [])

  return (
    <>
      <div className="container mb-5 mt-5">

        <h3 className="text-center">Support Ticket Request</h3>
        <Form className="w-50 col-lg-6 offset-lg-3 mt-5">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="John Doe" onChange={(e) => onChange('name', e)} value={ticket.name} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="john@mail.com" onChange={(e) => onChange('email', e)} value={ticket.email} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" placeholder="Feeling..." onChange={(e) => onChange('description', e)} value={ticket.description} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Email confirmation" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg" onClick={onSubmit}>
            Submit
          </Button>
          </div>
        </Form>
        <Container className='mt-5 text-center'>
          {quotes && quotes.map(q => {
            return <div key={q.id}>
              <q>{q.body}</q>
              <br></br>
              <strong>{q.author}</strong>
              <br></br>
              <br></br>
            </div>
          })}
        </Container>
      </div>
    </>
  )
}
