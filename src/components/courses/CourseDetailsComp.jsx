import { Tab, Tabs } from "react-bootstrap";
import CourseTimings from "../coursetimings/CourseTimingsTable";

function CourseDetailsComp({course, courseTimings, onCreate}) {
   
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="profile" title="Course Timings">
                <CourseTimings course={course} courseTimings={courseTimings} onCreate={onCreate}/>
            </Tab>

        </Tabs>
    );
}

export default CourseDetailsComp;