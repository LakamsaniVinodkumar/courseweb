import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import CourseTimingsFormModal from './CourseTimingsFormModal';
import Spacer from '../spacer';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function CourseTimings({ course, courses, courseTimings, onCreate, showCreate }) {
  const [showCourseTimingsForm, setShowCourseTimingsForm] = useState(false);
  const format = "YYYY-MM-DD HH:mm"
  const format1 = "YYYY-MM-DD"
  const courseTiming = { courseId: course };
  const handleShow = () => {
    setShowCourseTimingsForm(!showCourseTimingsForm)
  };

 

  const handleOk = () => {
    setShowCourseTimingsForm(!showCourseTimingsForm);
    const selctedCourse = courses.find(course => course.id == courseTiming.courseId);
    if(selctedCourse) {
      courseTiming['courseId'] = selctedCourse;
    }
    onCreate(courseTiming);
  }

  return (
    <>
      <div class="float-end">
        {showCreate && <Button variant="primary" size="sm" onClick={handleShow}>
          Create Course Timings
        </Button>
        }
      </div>
      {showCourseTimingsForm && <CourseTimingsFormModal
        courseTiming={courseTiming}
        courses={courses}
        show={showCourseTimingsForm}
        handleOk={handleOk}
        handleClose={handleShow} />}

      <br />
      <Spacer height="4rem" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courseTimings.map(courseTiming => {
            return <>
              <tr>
                <td><Link to={`/courses/${courseTiming.courseId.id}`}>{courseTiming.courseId.id}</Link></td>
                <td>{courseTiming.courseId.courseName}</td>
                <td>{courseTiming.courseId.courseCode}</td>
                <td>{moment(courseTiming.startDate).format(format) }</td>
                <td>{moment(courseTiming.endDate).format(format1)}</td>
                <td>{courseTiming.duration}</td>
              </tr>
            </>
          })}
        </tbody>
      </Table>
    </>
  )
}
