import React from 'react'
import Form from 'react-bootstrap/Form';

export default function CourseForm({ course, instructors }) {
  const onChange = (key, value) => {
    course[`${key}`] = value;
  }

  const onChangeInstructor = (key, value) => {
    const selectInstructor = instructors.find(instructor => instructor.id == value);
    if(selectInstructor) {
      course[`${key}`] = selectInstructor;
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" onChange={e => onChange('courseName', e.target.value)} controlId="courseName">
        <Form.Label>Course Name</Form.Label>
        <Form.Control type="text" placeholder="Course Name" />
      </Form.Group>
      <Form.Group className="mb-3" onChange={e => onChange('courseCode', e.target.value)} controlId="courseCode">
        <Form.Label>Course Code</Form.Label>
        <Form.Control type="text" placeholder="Course Code" />
      </Form.Group>
      <Form.Group className="mb-3" onChange={e => onChangeInstructor('instructorId', e.target.value)} controlId="instructorId">
        <Form.Label>Select Instructor</Form.Label>
        <Form.Select aria-label="Select Instructor">
          <option value="">Select</option>
          {instructors.map(instructor => {
            return <>
              <option value={instructor.id}>{instructor.name}</option>
            </>
          })}
        </Form.Select>
      </Form.Group>
    </Form>
  )
}
