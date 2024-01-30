import { Tab, Tabs } from "react-bootstrap";
import CourseEnrollment from "../courseenrollment/CourseEnrollmentTable";
import FeePayments from "../feepayments/FeePaymentsTable";
import FeePaymentCards from "../feepayments/FeePaymentsCards";
import CourseEnrollmentCards from "../courseenrollment/CourseEnrollmentCards";



function StudentDetailsComp({ studentId, student, studentFeePayments, studentCourses, courses, 
    onCreateEnrollment, onCreateFeePayment, onPayFeePayemnt }) {

    return (
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Course Assignments">
                {/* <CourseEnrollment student={student}
                    studentCourses={studentCourses}
                    courses={courses}
                    onCreate={onCreateEnrollment} /> */}


                <CourseEnrollmentCards student={student}
                    studentCourses={studentCourses}
                    courses={courses}
                    onCreate={onCreateEnrollment} />
            </Tab>
            {/* <Tab eventKey="payments" title="Fee Payments">
                <FeePayments student={student}
                    studentFeePayments={studentFeePayments}
                    courses={studentCourses}
                    onPayFeePayemnt={onPayFeePayemnt}
                    onCreate={onCreateFeePayment} />
            </Tab> */}

            <Tab eventKey="payments" title="Fee Payments">
                <FeePaymentCards student={student}
                    studentFeePayments={studentFeePayments}
                    courses={studentCourses}
                    onPayFeePayemnt={onPayFeePayemnt}
                    onCreate={onCreateFeePayment} />
            </Tab>

        </Tabs>
    );
}

export default StudentDetailsComp;