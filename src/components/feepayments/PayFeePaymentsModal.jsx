import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PayFeePaymentsForm from './PayFeePaymentForm';

export default function PayFeePaymentsModal({ show, feePayment, courses, splitPay, handleClose, handleOk }) {
    return (

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Pay Fee</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {splitPay && <PayFeePaymentsForm feePayment={feePayment} courses={courses}  /> }
                {!splitPay && <span> Do we want to confirm the payment {feePayment.feeAmount} </span>}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleOk}>Pay</Button>
            </Modal.Footer>

        </Modal>
    )
}
