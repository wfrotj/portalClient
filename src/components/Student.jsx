import { useState } from "react";
import studentService from "../services/studentService";

function Student({ students, setStudents }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userToken, setUserToken] = useState("");

  const addStudent = (e) => {
    e.preventDefault();
    setUserToken(
      JSON.parse(window.localStorage.getItem("loggedTeacher")).token
    );
    const student = {
      firsName: firstName,
      lastName: lastName,
    };
    console.log(student);
    studentService
      .createStudent(student)
      .then((returnedLearner) => {
        setStudents(students.concat(returnedLearner));
        setLastName("");
        setFirstName("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={addStudent}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default Student;
