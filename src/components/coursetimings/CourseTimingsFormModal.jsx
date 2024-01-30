import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import CourseTimingsForm from './CourseTimingsForm'

export default function CourseTimingsFormModal({ show, courses, courseTiming, handleClose, handleOk }) {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Course Timings</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <CourseTimingsForm courseTiming={courseTiming} courses={courses} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOk}>Save</Button>
            </Modal.Footer>

        </Modal>

    )
}
