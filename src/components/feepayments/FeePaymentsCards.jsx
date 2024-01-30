import React, { useState } from 'react'
import FeePaymentsModal from './FeePaymentsModal';
import PayFeePaymentsModal from './PayFeePaymentsModal';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Spacer from '../spacer';

export default function FeePaymentCards({ studentFeePayments, student, courses, onCreate, onPayFeePayemnt }) {
    const [showFeePaymentForm, setShowFeePaymentForm] = useState(false);
    const [showPayFeePaymentForm, setShowPayFeePaymentForm] = useState(false);
    const [splitPay, setSplitPay] = useState(false);
    const [payFeePayment, setPayFeePayment] = useState({});
    const feePayment = {};
    const handleShow = () => {
        setShowFeePaymentForm(!showFeePaymentForm)
    };

    const handleOk = () => {
        setShowFeePaymentForm(!showFeePaymentForm);
        onCreate(feePayment);
    }

    const onSplitPay = (payment) => {
        setShowPayFeePaymentForm(!showPayFeePaymentForm);
        setSplitPay(true);
    };
    const onPay = (payment) => {
        setSplitPay(false);
        setPayFeePayment(payment);
        setShowPayFeePaymentForm(!showPayFeePaymentForm);
    };
    const handleClosePay = () => {
        setShowPayFeePaymentForm(!showPayFeePaymentForm);
    }
    const handleOkPay = () => {
        setShowPayFeePaymentForm(!showPayFeePaymentForm);
        onPayFeePayemnt(payFeePayment);
    }

    return <>
        <div class="float-end">
            <Button variant="primary" size="sm" onClick={handleShow}>
                Create Fee Payment
            </Button>
        </div>

        {showPayFeePaymentForm &&
            <PayFeePaymentsModal feePayment={feePayment}
                show={showPayFeePaymentForm}
                courses={courses}
                splitPay={splitPay}
                handleOk={handleOkPay}
                handleClose={handleClosePay} />}
        {showFeePaymentForm &&
            <FeePaymentsModal feePayment={feePayment}
                show={showFeePaymentForm}
                courses={courses}
                handleOk={handleOk}
                handleClose={handleShow} />}


        <Spacer height="4rem" />
        <Container>
            <Row>
                {studentFeePayments.map(feePayment => <><FeePaymentCard onPay={onPay} onSplitPay={onSplitPay} feePayment={feePayment} /></>)}
            </Row>
        </Container>
    </>
}



function FeePaymentCard({ feePayment, onPay, onSplitPay }) {
    return (
        <Card border="success"  style={{ width: '16rem', marginLeft: '2rem', marginTop: '2rem' }}>
            <Card.Body>
                <Card.Title>{feePayment.courseId.courseName}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>FirstName : </Col>
                        <Col>{feePayment.studentId.firstName}</Col>
                    </Row>
                    <Row>
                        <Col>Fee Amount: </Col>
                        <Col>{feePayment.feeAmount}</Col>
                    </Row>

                    <Row>
                        <Col>Fee Status: </Col>
                        <Col>{feePayment.feeStatus}</Col>
                    </Row>

                </Card.Text>
            </Card.Body>


            <Card.Body>

                {/* <Card.Link href={`/courseEnrollments/${feePayment.id}`}>Course Enrollments</Card.Link> */}

                <Container>
                    <Row>
                        <Card.Link href={`/courses/${feePayment.courseId.id}`}>Course Timings</Card.Link>
                        <Row>
                            <Col>
                                {feePayment.feeStatus !== 'PAID' &&
                                    <Button variant="primary" size="sm" onClick={e => onPay(feePayment)}>
                                        Pay
                                    </Button>
                                }
                            </Col>
                            <Col>
                                {feePayment.feeStatus !== 'PAID' &&
                                    <Button variant="primary" size="sm" onClick={e => onSplitPay(feePayment)}>
                                        Split
                                    </Button>
                                }
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
} 