import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FeePaymentsForm from './FeePaymentsForm';

export default function FeePaymentsModal({ show, feePayment, courses, handleClose, handleOk }) {
    return (

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create FeePayment</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FeePaymentsForm feePayment={feePayment} courses={courses}  />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOk}>Save</Button>
            </Modal.Footer>

        </Modal>
    )
}
