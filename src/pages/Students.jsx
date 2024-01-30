import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Card, Container, Row } from 'react-bootstrap'
import StudentsTable from '../components/students/StudentsTable';
import Toaster from '../components/toaster';

export default function Students() {

    const [students, setStudents] = useState([]);
    const [showToaster, setShowToaster] = useState(false);

    const fetchAll = () => {
        fetch('/api/students')
            .then((response) => response.json()).then(data => {
                setStudents(data)
            });
    }

    const onCreateStudent = (data) => {
        console.log(data);
        fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then(data => {
            setShowToaster(true);
            fetchAll();
        });
    }

    useEffect(() => {
        return () => {
            fetchAll();
        }
    }, []);

    return (
        <>
            <Toaster setShow={() => setShowToaster(!showToaster)}
                showToaster={showToaster}
                position={'top-end'} variant={'Success'}
                body={'Created Student Success'} />
            <Header></Header>
            <Container>

                <Row />
                <Row />
                <Card>
                    <Card.Body>
                        <StudentsTable
                            students={students}
                            onCreate={onCreateStudent} />
                    </Card.Body>
                </Card>
            </Container>
            <Footer></Footer>
        </>

    )
} 