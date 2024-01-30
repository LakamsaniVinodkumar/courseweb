import React from 'react'
import { Form } from 'react-bootstrap';

export default function FeePaymentsForm({ feePayment, courses }) {
    const onChangeCourse = (key, value) => {
        const selectCourse = courses.find(course => course.courseId.id == value);
        if (selectCourse) {
            feePayment[`${key}`] = selectCourse;
        }
    }

    const onChange = (key, value) => {
        feePayment[`${key}`] = value;
      }

    return (
        <Form>
            <Form.Group className="mb-3" onChange={e => onChangeCourse('enrollId', e.target.value)} controlId="courseId">
                <Form.Label>Select Course</Form.Label>
                <Form.Select aria-label="Select Course">
                    <option value="">Select</option>
                    {courses.map(course => {
                        return <>
                            <option value={course.courseId.id}>{course.courseId.courseName}</option>
                        </>
                    })}
                </Form.Select>
                <Form.Group className="mb-3" onChange={e => onChange('feeAmount', e.target.value)} controlId="feeAmountId">
                    <Form.Label>Fee Amount</Form.Label>
                    <Form.Control type="text" placeholder="Fee Amount" />
                </Form.Group>
            </Form.Group>
        </Form>
    )
}
