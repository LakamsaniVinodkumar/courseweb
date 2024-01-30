import React from 'react'
import { Form } from 'react-bootstrap'

export default function CourseEnrollmentForm({ courses, courseEnrollment }) {

    const onChangeCourse = (key, value) => {
        const selectCourse = courses.find(course => course.id == value);
        if (selectCourse) {
            courseEnrollment[`${key}`] = selectCourse;
        }
    }

    return (
        <Form>
            <Form.Group className="mb-3" onChange={e => onChangeCourse('courseId', e.target.value)} controlId="instructorId">
                <Form.Label>Select Instructor</Form.Label>
                <Form.Select aria-label="Select Course">
                    <option value="">Select</option>
                    {courses.map(course => {
                        return <>
                            <option value={course.id}>{course.courseName}</option>
                        </>
                    })}
                </Form.Select>
            </Form.Group>
        </Form>
    )
}
