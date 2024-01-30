import React from 'react'
import Form from 'react-bootstrap/Form';

export default function StudentForm({ student }) {
  const onChange = (key, value) => {
    student[`${key}`] = value;
  }
  return (
    <Form>
      <Form.Group className="mb-3" onChange={e => onChange('firstName', e.target.value)} controlId="firstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="FirstName" />
      </Form.Group>

      <Form.Group className="mb-3" onChange={e => onChange('lastName', e.target.value)} controlId="lastName">
        <Form.Label>LasName</Form.Label>
        <Form.Control type="text" placeholder="lastName" />
      </Form.Group>

      <Form.Group className="mb-3" onChange={e => onChange('email', e.target.value)} controlId="studentEmail">
        <Form.Label>Student Email</Form.Label>
        <Form.Control type="email" placeholder="Student email" />
      </Form.Group>

    </Form>
  )
}
