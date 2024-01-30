import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CourseEnrollmentForm from './CourseEnrollmentForm';

export default function CourseEnrollmentModal({ show, courseEnrollment, courses, handleClose, handleOk }) {
    return (

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Course Enrollment</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <CourseEnrollmentForm courseEnrollment={courseEnrollment} courses={courses}  />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOk}>Save</Button>
            </Modal.Footer>

        </Modal>
    )
}
