import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import StudentFormModal from './StudentFormModal';
import { Link, useNavigate } from 'react-router-dom';
import Spacer from '../spacer';

export default function StudentsTable({ students, onCreate }) {
    console.log(students);
    const navigate = useNavigate();
    const [showStudentForm, setShowStudentForm] = useState(false);
    const student = { name: '' };
    const handleShow = () => {
        setShowStudentForm(!showStudentForm)
    };

    const handleOk = () => {
        setShowStudentForm(!showStudentForm);
        onCreate(student);
    }

    const onRowClick = (student) => {
        console.log("Row clicked");
        navigate(`/students/${student.id}`);
    }

    return (
        <div>
            <div class="float-end">
                <Button variant="primary" size="sm" onClick={handleShow}>
                    Create Student
                </Button>
            </div>
            {showStudentForm && <StudentFormModal student={student} show={showStudentForm} handleOk={handleOk} handleClose={handleShow} />}
            <Spacer height="4rem" />
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {students.map(student => {
                        return <>
                            <tr onClick={e => onRowClick(student)}>
                                <td><Link to={`/students/${student.id}`}>{student.id}</Link></td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                            </tr>
                        </>
                    })}
                </tbody>
            </Table>
        </div>
    )
}
