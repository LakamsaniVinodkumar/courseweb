import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CourseForm from './CourseForm';

export default function CourseFormModal({show, course, instructors, handleClose, handleOk}) {
    return (

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Course</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <CourseForm instructors={instructors} course={course}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOk}>Save</Button>
            </Modal.Footer>

        </Modal>
    )
}
