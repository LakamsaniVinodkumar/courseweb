import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Footer from '../components/footer'
import Header from '../components/header'
import Toaster from '../components/toaster'
import CourseTimings from '../components/coursetimings/CourseTimingsTable'
import moment from 'moment'

export default function CourseTiming() {
  const format = "YYYY-MM-DD HH:mm"
  const [courses, setCourses] = useState([]);
  const [courseTimings, setCourseTimings] = useState([]);
  const [showToaster, setShowToaster] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('Success');
  const fetchAll = () => {
    fetch('/api/courses')
      .then((response) => response.json()).then(data => {
        setCourses(data)
      });
  }


  const fetchAllCourseTimings = () => {
    fetch(`/api/courseTimings`)
      .then((response) => response.json()).then(data => {
        setCourseTimings(data)
      });
  }



  const validateCourseTimings = (data) => {
    const currentStartDate = data['startDate'];
    const currentDuration = data['duration'];
    let currentDateMoment = moment(currentStartDate)
      .add(currentDuration, 'minutes');

    const validCourseTiming = courseTimings.filter(courseTimings => {
      const startDate = courseTimings['startDate'];
      let startDateMoment = moment(startDate).add(currentDuration, 'minutes');
      const diff = currentDateMoment.diff(startDateMoment, 'minutes');
      return diff < 60;

    });
    return validCourseTiming;
  }

  const onCreateCourseTimings = (data) => {
    const duration = data['duration'];
    debugger;
    if (duration > 60 || duration < 0) {
      setVariant('Danger');
      setShowToaster(true);
      setMessage('Unable to create course timing duration was not valid');
      return;
    }
    const invalidCourseTimings = validateCourseTimings(data);
    if(invalidCourseTimings && invalidCourseTimings.length) {
      setVariant('Danger');
      setShowToaster(true);
      setMessage('Unable to create course timing duration overlap timings not possible');
      return;
    }
    data['endDate'] = `${data['endDate']}T00:00`;
    fetch('/api/courseTimings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then((response) => response.json()).then(data => {
      setVariant('Success');
      setShowToaster(true);
      setMessage('Created CourseTimings Success');
      fetchAllCourseTimings();
    });
  }

  useEffect(() => {
    return () => {
      fetchAll();
      fetchAllCourseTimings();
    }
  }, []);

  return (
    <>
      <Header></Header>
      <Container>
        <Toaster setShow={() => setShowToaster(!showToaster)}
          showToaster={showToaster} position={'top-end'}
          variant={variant}
          body={message || 'Created CourseTimings Success'} />
        <Card>
          <Card.Body>
            {/* <CoursesTable
              instructors={instructors}
              courses={courses}
              onCreate={onCreateCourse} /> */}

            <CourseTimings
              courseTimings={courseTimings}
              courses={courses}
              showCreate
              onCreate={onCreateCourseTimings}
            />

          </Card.Body>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  )
}
