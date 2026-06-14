import React, { useState } from "react";
import CourseComponent from './courseComponent';

function AllCourses() {

    let [courses, setCourses] = useState([
        { id: 1, name: "Course 1", details: "Details for Course 1" },
        { id: 2, name: "Course 2", details: "Details for Course 2" },
        { id: 3, name: "Course 3", details: "Details for Course 3" }
    ]);

    let countOfAddCourseButton = 3;
    
    function addCourse() {
        countOfAddCourseButton++;
        let name = prompt("Enter course name:");
        if (name === null || name.trim() === "") {
            alert("Course name cannot be empty. Course not added.");
            return;
        }
        let details = 'Details for ' + name;
        let newCourse = { id: countOfAddCourseButton, name: name, details: details };
        setCourses([...courses, newCourse]);
        console.log(courses);
        alert("Course added: " + newCourse.name);
    }




    return (
        <div>
            {courses.map(course => (
                <CourseComponent key={course.id} course={course.name} details={course.details} />
            ))}
            <button onClick={addCourse}>Add Course</button>
            

        </div>

    );
}

export default AllCourses;