import React from "react";
import studentService from "../services/studentService";
import { useState } from "react";
import teacherService from "../services/teacherService";

function Student() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleAddStudent = (event) => {
    event.preventDefault();
    teacherService.setToken(
      JSON.parse(window.localStorage.getItem("loggedTeacher")).token
    );
    const studentObject = {
      firstName,
      lastName,
    };
    studentService
      .createStudent(studentObject)
      .then((studentObject) => {
        setFirstName("");
        setLastName("");
        alert("Success");
      })
      .catch(() => alert("Error occured"));
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
