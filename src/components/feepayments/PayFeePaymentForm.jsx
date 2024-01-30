import React from 'react'
import { Form } from 'react-bootstrap';

export default function PayFeePaymentsForm({ feePayment, courses }) {
    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="courseId">
                
                <Form.Group className="mb-3" controlId="feeAmountId">
                    <Form.Label>Split Fee Amount</Form.Label>
                    <Form.Control type="text" placeholder="Fee Amount" />
                </Form.Group>
            </Form.Group>
        </Form>
    )
}
