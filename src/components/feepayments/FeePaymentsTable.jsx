import React, { useState } from 'react'
import FeePaymentsModal from './FeePaymentsModal';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spacer from '../spacer';

export default function FeePayments({studentFeePayments, student, courses, onCreate}) {
    const [showFeePaymentForm, setShowFeePaymentForm] = useState(false);
    const feePayment = {};
    const handleShow = () => {
        setShowFeePaymentForm(!showFeePaymentForm)
    };

    const handleOk = () => {
        setShowFeePaymentForm(false);
        onCreate(feePayment);
    }

    return (
        <>
            <Card>
                <Container>
                    <Row>
                        <Col>FirstName:</Col>
                        <Col>{student.firstName}</Col>
                    </Row>
                </Container>
            </Card>
            <br />

            <div class="float-end">
                <Button variant="primary" size="sm" onClick={handleShow}>
                    Create Fee Payment
                </Button>
            </div>
            {showFeePaymentForm &&
                <FeePaymentsModal feePayment={feePayment}
                    show={showFeePaymentForm}
                    courses={courses}
                    handleOk={handleOk}
                    handleClose={handleShow} />}
            <Spacer height="4rem" />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Student Name</th>
                        <th>Fee Amount</th>
                        <th>Fee Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {studentFeePayments.map(feePayment => {
                        return <>
                            <tr>
                                <td><Link to={`/courseEnrollments/${feePayment.id}`}>{feePayment.id}</Link></td>
                                <td><Link to={`/courses/${feePayment.courseId.id}`}>{feePayment.courseId.id}</Link></td>
                                <td>{feePayment.courseId.courseName}</td>
                                <td>{feePayment.studentId.firstName}</td>
                                <td>{feePayment.feeAmount}</td>
                                <td>{feePayment.feeStatus}</td>
                            </tr>
                        </>
                    })}
                </tbody>
            </Table>
        </>
    );
}
