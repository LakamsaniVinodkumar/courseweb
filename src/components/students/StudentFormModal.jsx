import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StudentForm from './StudentForm';

export default function StudentFormModal({show, student, handleClose, handleOk}) {
    return (

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Student</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <StudentForm student={student}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOk}>Save</Button>
            </Modal.Footer>

        </Modal>
    )
}
