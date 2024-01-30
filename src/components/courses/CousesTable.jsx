import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import CourseFormModal from './CourseFormModal';
import { Link } from 'react-router-dom';
import Spacer from '../spacer';

export default function CoursesTable({ courses, instructors, onCreate }) {

    const [showCourseForm, setShowCourseForm] = useState(false);
    const course = {};
    const handleShow = () => {
        setShowCourseForm(!showCourseForm)
    };

    const handleOk = () => {
        setShowCourseForm(!showCourseForm);
        onCreate(course);
    }

    return (
        <>
            <div class="float-end">
                <Button variant="primary" size="sm" onClick={handleShow}>
                    Create Course
                </Button>
            </div>
            {showCourseForm && <CourseFormModal course={course}
                show={showCourseForm} instructors={instructors} handleOk={handleOk} handleClose={handleShow} />}

            <br />
            <Spacer height="4rem" />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Instructor Name</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => {
                        return <>
                            <tr>
                                <td><Link to={`/courses/${course.id}`}>{course.id}</Link></td>
                                <td>{course.courseName}</td>
                                <td>{course.courseCode}</td>
                                <td>{course.instructorId?.name}</td>
                            </tr>
                        </>
                    })}
                </tbody>
            </Table>
        </>
    )
}
