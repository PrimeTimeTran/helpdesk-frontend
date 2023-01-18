import { useEffect, useState } from 'react'

import {
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap'

interface Ticket {
  name: string
  email: string
  description: string
}

export default function TicketForm({ selectedTicket }) {
  const [ticket, setTicket] = useState<Ticket>(selectedTicket)

  const onChange = (attr: string, e: { target: { value: any; }; }) => {
    setTicket({ ...ticket, [attr]: e.target.value })
  }

  const onSubmit = async () => {
    const json = await post('ticket', ticket)
    console.log({ json })
  }

  useEffect(() => {
    setTicket(selectedTicket)
  }, [selectedTicket])

  console.log({ selectedTicket });

  return (
    <div className="container">
      <Form className="">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control type="name" placeholder="John Doe" onChange={(e) => onChange('name', e)} value={ticket?.name} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="john@mail.com" onChange={(e) => onChange('email', e)} value={ticket?.email} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control type="description" placeholder="Feeling..." onChange={(e) => onChange('description', e)} value={ticket?.description} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control type="status" placeholder="new | progress | resolved " onChange={(e) => onChange('email', e)} value={ticket?.status} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg" onClick={onSubmit}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}
function post(arg0: string, ticket: Ticket) {
  throw new Error('Function not implemented.');
}

