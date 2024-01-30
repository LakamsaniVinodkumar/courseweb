import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/footer'
import Header from '../components/header'
import InstructorsTable from '../components/instructors/InstructorsTable';
import Toaster from '../components/toaster';

export default function Instructors() {

  const [instructors, setInstructors] = useState([]);
  const [showToaster, setShowToaster] = useState(false);
  const fetchAll = () => {
    fetch('/api/instructors')
      .then((response) => response.json()).then(data => {
        setInstructors(data)
      });
  }

  const onCreateInstructor = (data) => {
    console.log(data);
    fetch('/api/instructors', {
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
    }
  }, []);

  return (
    <>
      <Header></Header>
      <Container>
        <Toaster setShow={() => setShowToaster(!showToaster)}
          showToaster={showToaster}
          position={'top-end'} variant={'Success'}
          body={'Created Instructor Success'} />
        <Card>
          <Card.Body><InstructorsTable instructors={instructors} onCreate={onCreateInstructor} /></Card.Body>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  )
}
