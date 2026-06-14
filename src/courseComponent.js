import React from "react";
import { useState } from "react";
function CourseComponent(props) {
   let [compDetails, setCompDetails] = useState({
        course: props.course,
        details: props.details
    });
    const handleUpdate = () => {

        let newCourseName = prompt("Enter new course name:", props.course);
        if (newCourseName !== null && newCourseName.trim() !== "") {
            setCompDetails({ ...compDetails, course: newCourseName, details: "Details for " + newCourseName });

            alert("Course updated to: " + newCourseName);
        } else {
            setCompDetails({ ...compDetails, course: props.course });
            alert("Course name cannot be empty. Update cancelled.");
        }
        //alert("Update course: " + props.course);
    };

    const handleDelete = () => {
        setCompDetails({ ...compDetails, course: "Course Deleted", details: "This course has been deleted." });
        alert("Delete course: " + props.course);
    };

    return (
        <div className="jumbotron" style={{ padding: "2rem", margin: "1rem", border: "1px solid #dee2e6", backgroundColor: "#f8f9fa", borderRadius: "0.5rem" }}>
            <h1 className="display-4">{compDetails.course}</h1>
            <p className="lead">{compDetails.details}</p>
            <button id="update-course" onClick={handleUpdate}>update course</button>
            <button id="delete-course" onClick={handleDelete}>delete course</button>
        </div>
    );
}

export default CourseComponent;