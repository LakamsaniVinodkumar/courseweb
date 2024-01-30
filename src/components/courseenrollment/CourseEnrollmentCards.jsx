import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Spacer from '../spacer';
import CourseEnrollmentModal from './CourseEnrollmentModal';

export default function CourseEnrollmentCards({ studentCourses, student, courses, onCreate }) {
    const [showCourseEnrollmentForm, setShowCourseEnrollmentFormForm] = useState(false);
    const courseEnrollment = { studentId: student };
    const handleShow = () => {
        setShowCourseEnrollmentFormForm(!showCourseEnrollmentForm)
    };

    const handleOk = () => {
        setShowCourseEnrollmentFormForm(!showCourseEnrollmentForm);
        onCreate(courseEnrollment);
    }


    return <>
        <div class="float-end">
            <Button variant="primary" size="sm" onClick={handleShow}>
                Create Course
            </Button>
        </div>
        {showCourseEnrollmentForm &&
            <CourseEnrollmentModal courseEnrollment={courseEnrollment}
                show={showCourseEnrollmentForm}
                courses={courses}
                handleOk={handleOk}
                handleClose={handleShow} />}

        <br />
        <Spacer height="4rem" />
        <Container>
            <Row>
                {studentCourses.map(course => <CourseEnrollmentCard course={course} />)}
            </Row>
        </Container>
    </>
}



function CourseEnrollmentCard({ course }) {
    return (
        <Card border="success"  style={{ width: '16rem', marginLeft: '2rem', marginTop: '2rem' }}>

            <Card.Body>
                <Card.Title>{course.courseId.courseName}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>FirstName: </Col>
                        <Col>{course.studentId.firstName}</Col></Row>
                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Card.Link href={`/courses/${course.courseId.id}`}>Course Timings</Card.Link>
            </Card.Body>
        </Card>
    );
}