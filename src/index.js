import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Instructors from './pages/Instructors';
import Courses from './pages/Courses';

import Students from './pages/Students';
import CourseDetails from './pages/CourseDetails';
import StudentDetails from './pages/StudentDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseTiming from './pages/CourseTimings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route>
          <Route path="/" element={<Students />} />
          <Route path="students" element={<Students />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courseTimings" element={<CourseTiming />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="students/:id" element={<StudentDetails />} />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
