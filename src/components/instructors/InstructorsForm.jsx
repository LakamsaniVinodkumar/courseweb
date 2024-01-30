import React from 'react'
import Form from 'react-bootstrap/Form';

export default function InstructorsForm({instructor}) {
  const onChange = (key, value) => {
    instructor[`${key}`] = value;
  }
  return (
    <Form>
      <Form.Group className="mb-3" onChange={e => onChange( 'name', e.target.value )} controlId="instructor.name">
        <Form.Label>Instructor Name</Form.Label>
        <Form.Control type="email" placeholder="Instructor Name" />
      </Form.Group>
    </Form>
  )
}
