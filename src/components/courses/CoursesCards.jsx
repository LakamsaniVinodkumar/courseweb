import React, { useState } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import Spacer from '../spacer';
import CourseFormModal from './CourseFormModal';

export default function CoursesCards({ courses, instructors, onCreate }) {
    const [showCourseForm, setShowCourseForm] = useState(false);
    const course = {};
    const handleShow = () => {
        setShowCourseForm(!showCourseForm)
    };

    const handleOk = () => {
        setShowCourseForm(!showCourseForm);
        onCreate(course);
    }

    return <>
        <div class="float-end">
            <Button variant="primary" size="sm" onClick={handleShow}>
                Create Course
            </Button>
        </div>
        {showCourseForm && <CourseFormModal course={course}
            show={showCourseForm} instructors={instructors} handleOk={handleOk} handleClose={handleShow} />}

        <br />
        <Spacer height="4rem" />
        <Container>
            <Row>
                {courses.map(course => <CoursesCard course={course} />)}
            </Row>
        </Container>
    </>
}



function CoursesCard({ course }) {
    return (
        <Card border="success"  style={{ width: '16rem', marginLeft: '2rem', marginTop: '2rem' }}>

            <Card.Body>
                <Card.Title>{course.courseName}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>Course Code : </Col>
                        <Col>{course.courseCode}</Col></Row>
                    <Row>
                        <Col>Instructor Name: </Col>
                        <Col>{course.instructorId?.name}</Col></Row>

                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Card.Link href={`/courses/${course.id}`}>Course Timings</Card.Link>
            </Card.Body>
        </Card>
    );
}