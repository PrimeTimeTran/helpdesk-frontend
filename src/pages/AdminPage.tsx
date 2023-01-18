import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import { getTickets } from '../utils/api'

interface Ticket {
  id: number
  name: string
  email: string
  description: string
  status: string
}

export default function AdminPage() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  useEffect(() => {
    async function fetchTickets() {
      const tickets = await getTickets()
      setTickets(tickets)
    }
    fetchTickets()
  }, [])

  return (
    <>
      <h1 className='text-center mt-5 mb-3'>AdminPage</h1>

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets && tickets.map(t => {
              return (
                <tr>
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.email}</td>
                  <td>{t.description}</td>
                  <td>{t.status}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </>
  )
}
