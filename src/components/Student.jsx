import React, { useState, useEffect } from "react";
import studentService from "../services/studentService";

function Student({ user, setUser, students, setStudents }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [section, setSection] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTeacher");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      studentService.setToken(user.token);
    }
  }, []);
  const handleAddVisitor = (e) => {
    e.preventDefault();

    // setUserToken(JSON.parse(window.localStorage.getItem("loggedUser")).token);

    /* console.log(userToken); */
    const studentObject = {
      firstName: firstName,
      lastName: lastName,
      section: section,
    };
    studentService
      .createStudent(studentObject)
      .then((returnedStudent) => {
        setStudents(students.concat(returnedStudent));
        setFirstName("");
        setLastName("");
        console.log(returnedStudent);
      })
      .catch((error) => {
        console.log(error);

        alert(`Please click "ADD" button again`);
      });
  };
  return (
    <div className="background-modal tw-z-[1500] ">
      <div className="remove-user-modal tw-h-[60vh]">
        {/*  */}
        ADD NEW STUDENT
        <br />
        <form onSubmit={handleAddVisitor}>
          <div className="tw-flex tw-flex-col">
            <label>FIRST NAME</label>
            <input
              type="text"
              name="firstname"
              value={firstName}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label>LAST NAME </label>
            <input
              type="text"
              name="name"
              value={lastName}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label>PURPOSE </label>
            <select
              name="purpose"
              id="purposeList"
              value={section}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setSection(e.target.value)}
            >
              <option selected> Choose Section</option>
              <option value="Iceland"> Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
            </select>
            {/*    <input
              type="text"
              name="purpose"
              value={purpose}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setPurpose(e.target.value)}
            /> */}
          </div>

          <button
            className="modalButton tw-bg-black"
            /*  onClick={() => {
            setShow(null);
          }} */
            type="submit"
            name="submitButton"
          >
            ADD
          </button>
        </form>
      </div>{" "}
    </div>
  );
}

export default Student;
