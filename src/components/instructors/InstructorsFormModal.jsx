import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InstructorsForm from './InstructorsForm';

export default function InstructorsFormModal({show, instructor,  handleClose, handleOk}) {
    return (

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Instructors</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <InstructorsForm instructor={instructor}/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOk}>Save</Button>
            </Modal.Footer>

        </Modal>
    )
}
