import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Footer from '../components/footer'
import Header from '../components/header'
import Toaster from '../components/toaster'
import CoursesCards from '../components/courses/CoursesCards'

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [showToaster, setShowToaster] = useState(false);
  const [message, setMessage] = useState('');
  const fetchAll = () => {
    fetch('/api/courses')
      .then((response) => response.json()).then(data => {
        setCourses(data)
      });
  }

  const fetchAllInstructors = () => {
    fetch('/api/instructors')
      .then((response) => response.json()).then(data => {
        setInstructors(data)
      });
  }

  const onCreateCourse = (data) => {
   


    fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then((response) => response.json()).then(data => {
      setShowToaster(true);
      fetchAll();

    });
  }



  useEffect(() => {
    return () => {
      fetchAll();
      fetchAllInstructors();
    }
  }, []);

  return (
    <>
      <Header></Header>
      <Container>
        <Toaster setShow={() => setShowToaster(!showToaster)}
          showToaster={showToaster} position={'top-end'}
          variant={'Success'}
          body={message || 'Created Course Success'} />
        <Card>
          <Card.Body>
            {/* <CoursesTable
              instructors={instructors}
              courses={courses}
              onCreate={onCreateCourse} /> */}

            <CoursesCards
              instructors={instructors}
              courses={courses}
              onCreate={onCreateCourse} />

          </Card.Body>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  )
}
