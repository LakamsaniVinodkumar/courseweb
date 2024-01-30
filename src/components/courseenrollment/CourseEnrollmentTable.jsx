import React, { useState } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import CourseEnrollmentModal from './CourseEnrollmentModal';
import { Link } from 'react-router-dom';
import Spacer from '../spacer';

export default function CourseEnrollment({ studentCourses, student, courses, onCreate }) {

    const [showCourseEnrollmentForm, setShowCourseEnrollmentFormForm] = useState(false);
    const courseEnrollment = { studentId: student };
    const handleShow = () => {
        setShowCourseEnrollmentFormForm(!showCourseEnrollmentForm)
    };

    const handleOk = () => {
        setShowCourseEnrollmentFormForm(!showCourseEnrollmentForm);
        onCreate(courseEnrollment);
    }

    return (
        <>
            <Card>
                <Container>
                    <Row>
                        <Col>FirstName:</Col>
                        <Col>{student.firstName}</Col>
                    </Row>
                </Container>
            </Card>
            <br />

            <div class="float-end">
                <Button variant="primary" size="sm" onClick={handleShow}>
                    Create Course Enrollment
                </Button>
            </div>
    
            {showCourseEnrollmentForm &&
                <CourseEnrollmentModal courseEnrollment={courseEnrollment}
                    show={showCourseEnrollmentForm}
                    courses={courses}
                    handleOk={handleOk}
                    handleClose={handleShow} />}
            <Spacer height="4rem" />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Student Name</th>
                    </tr>
                </thead>
                <tbody>
                    {studentCourses.map(course => {
                        return <>
                            <tr>
                                <td><Link to={`/courseEnrollments/${course.id}`}>{course.id}</Link></td>
                                <td><Link to={`/courses/${course.courseId.id}`}>{course.courseId.id}</Link></td>
                                <td>{course.courseId.courseName}</td>
                                <td>{course.studentId.firstName}</td>
                            </tr>
                        </>
                    })}
                </tbody>
            </Table>
        </>
    )
}
