import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import moment from 'moment';

export default function CourseTimingsForm({ courseTiming, courses }) {
  const format1 = "YYYY-MM-DD HH:mm"
  const startDate = new Date();
  const minDate = moment(startDate).format(format1);
  const [minEndDate, setMinEndDate] = useState(minDate);
  const onChange = (key, value) => {
    courseTiming[`${key}`] = value;
    if (key === 'startDate') {
      setMinEndDate(moment(value).format(format1))
    }

    // if (key === 'endDate') {
    //   const a = moment(courseTiming['startDate']);//now
    //   const b = moment(courseTiming['endDate']);
    //   const diff = b.diff(a, 'minutes');
    //   courseTiming['duration'] = diff;
    //   setDuration(diff);
    // }
  }


  return (
    <Form>
      <Form.Group className="mb-3" onChange={e => onChange('courseId', e.target.value)} controlId="instructorId">
        <Form.Label>Select Course</Form.Label>
        <Form.Select aria-label="Select Course">
          <option value="">Select</option>
          {courses.map(course => {
            return <>
              <option value={course.id}>{course.courseName}</option>
            </>
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" onChange={e => onChange('startDate', e.target.value)} controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="datetime-local" min={minDate} placeholder="Start Date" />
      </Form.Group>

      <Form.Group className="mb-3" onChange={e => onChange('endDate', e.target.value)} controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="date" min={minEndDate} placeholder="End Date" />
      </Form.Group>


      <Form.Group className="mb-3" onChange={e => onChange('duration', e.target.value)} controlId="duration">
        <Form.Label>Duration</Form.Label>
        <Form.Control type="number" placeholder="Duration" />
      </Form.Group>

    </Form>
  )
}
