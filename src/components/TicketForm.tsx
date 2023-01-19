import { useEffect, useState } from 'react'

import {
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap'

import _ from 'lodash'

import { updateTicket } from '../utils/api';

interface Ticket {
  name: string
  email: string
  description: string
  status: string
}

export default function TicketForm({ selectedTicket }) {
  const [ticket, setTicket] = useState<Ticket | undefined>(selectedTicket)

  const onChange = (attr: string, e: { target: { value: any; }; }) => {
    setTicket({ ...ticket, [attr]: e.target.value })
  }

  const onSubmit = async () => {
    const json = await updateTicket(ticket.id, ticket)
    console.log({ json })
  }

  useEffect(() => {
    setTicket(selectedTicket)
  }, [selectedTicket])

  console.log({ ticket });

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
            <Form.Select onChange={(e) => onChange('status', e)} value={ticket?.status}>
              <option value="new">New</option>
              <option value="progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </Form.Select>
          </Col>
        </Row>

        <div className="d-grid gap-2">
          {!_.isEqual(ticket, selectedTicket) && 
          <Button variant="primary" type="submit" size="lg" onClick={onSubmit}>
            Save
            </Button>}
        </div>
      </Form>
    </div>
  )
}
