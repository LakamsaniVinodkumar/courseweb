import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Header from '../components/header'
import Footer from '../components/footer'
import CourseDetailsComp from '../components/courses/CourseDetailsComp'
import { useParams } from 'react-router-dom'

export default function CourseDetails() {
    const params = useParams();
    const courseId = params.id;
    const [courseTimings, setCourseTimings] = useState([]);
    const [course, setCourse] = useState({});
    

    const fetchAllCourseTimings = () => {
        fetch(`/api/courseTimings/${courseId}`)
            .then((response) => response.json()).then(data => {
                setCourseTimings(data)
            });
    }

    const fetchCourse = () => {
        fetch(`/api/courses/${courseId}`)
            .then((response) => response.json()).then(data => {
                setCourse(data)
            });
    }

    const onCreateCourseTimings = (data) => {
        fetch('/api/courseTimings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then(data => {
            fetchAllCourseTimings();
        });
    }


    useEffect(() => {
        return () => {
            fetchCourse();
            fetchAllCourseTimings();
        }
    }, [courseId]);

    return (
        <>
            <Header></Header>
            <Container>
                <Card>
                    <Card.Body>
                        <CourseDetailsComp
                            course={course}
                            courseTimings={courseTimings}
                            onCreate={onCreateCourseTimings} />
                    </Card.Body>
                </Card>
            </Container>
            <Footer></Footer>
        </>
    )
}
