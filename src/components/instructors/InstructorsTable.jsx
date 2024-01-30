import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import InstructorsFormModal from './InstructorsFormModal';
import Spacer from '../spacer';

export default function InstructorsTable({ instructors, onCreate }) {

    const [showInstructorForm, setShowInstructorForm] = useState(false);
    const instructor = { name: '' };
    const handleShow = () => {
        setShowInstructorForm(!showInstructorForm)
    };

    const handleOk = () => {
        setShowInstructorForm(!showInstructorForm);
        onCreate(instructor);
    }

    return (
        <>
            <div class="float-end">
                <Button variant="primary" size="sm" onClick={handleShow}>
                    Create Instructor
                </Button>
            </div>
            {showInstructorForm && <InstructorsFormModal instructor={instructor}
                show={showInstructorForm} handleOk={handleOk} handleClose={handleShow} />}
            <Spacer height="4rem" />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors.map(instructor => {
                        return <>
                            <tr>
                                <td>{instructor.id}</td>
                                <td>{instructor.name}</td>

                            </tr>
                        </>
                    })}
                </tbody>
            </Table>
        </>
    )
}
