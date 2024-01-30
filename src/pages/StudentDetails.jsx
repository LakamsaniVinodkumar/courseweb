import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Header from '../components/header'
import Footer from '../components/footer'
import StudentDetailsComp from '../components/students/StudentDetailsComp'
import { useParams } from 'react-router-dom'

export default function StudentDetails() {
    const params = useParams();
    const studentId = params.id;
    const [studentCourses, setStudentCourses] = useState([]);
    const [studentFeePayments, setStudentFeePayments] = useState([]);
    const [courses, setCourses] = useState([]);
    const [student, setStudent] = useState({});



    const fetchStudentInfo = () => {
        fetch(`/api/students/${studentId}`)
            .then((response) => response.json()).then(data => {
                setStudent(data)
            });
    }

    const fetchAllCourses = () => {
        fetch('/api/courses')
            .then((response) => response.json()).then(data => {
                setCourses(data)
            });
    }


    const fetchAllStudentCourses = () => {
        fetch(`/api/courseEnrollments/${studentId}`)
            .then((response) => response.json()).then(data => {
                setStudentCourses(data)
            });
    }

    const fetchAllStudentFeePayments = () => {
        fetch(`/api/feepayments/${studentId}`)
            .then((response) => response.json()).then(data => {
                setStudentFeePayments(data)
            });
    }


    const onCreateEnrollment = (data) => {
        fetch('/api/courseEnrollments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then(data => {
            fetchAllStudentCourses();
        });
    }

    const onCreateFeePayment = (data) => {
        console.log(data);
        fetch('/api/feepayments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then(data => {
            fetchAllStudentFeePayments();
        });
    }

    const onPayFeePayemnt = (data) => {
        console.log(data);
        data.feeStatus = 'PAID'
        console.log(data);
        fetch('/api/feepayments', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then(data => {
            fetchAllStudentFeePayments();
        });
    }


    useEffect(() => {
        return () => {
            fetchAllCourses();
            fetchAllStudentCourses();
            fetchAllStudentFeePayments();
            fetchStudentInfo();
        }
    }, [studentId]);

    return (
        <>
            <Header></Header>
            <Container>
                <Card>
                    <Card.Body>
                        <StudentDetailsComp student={student} studentId={studentId}
                            studentFeePayments={studentFeePayments}
                            studentCourses={studentCourses} courses={courses}
                            onCreateFeePayment={onCreateFeePayment}
                            onPayFeePayemnt={onPayFeePayemnt}
                            onCreateEnrollment={onCreateEnrollment} />
                    </Card.Body>
                </Card>
            </Container>
            <Footer></Footer>
        </>
    )
}
