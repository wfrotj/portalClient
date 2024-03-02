import React from "react";
import studentService from "../services/studentService";
import { useState } from "react";
// import teacherService from "../services/teacherService";

function Student({ students, setStudents }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    // setUserToken(
    //   JSON.parse(window.localStorage.getItem("loggedTeacher")).token
    // );
    const studentObject = {
      firstName: firstName,
      lastName: lastName,
    };

    studentService.createStudent(studentObject).then((returnedStudent) => {
      setStudents(students.concat(returnedStudent));
      setFirstName("");
      setLastName("");
      alert("Success!");
    });
  };

  return (
    <div>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Student;
