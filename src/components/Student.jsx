import { useState, useRef, useEffect, useContext } from "react";
import PersonContext from "../features/PersonContext";
import studentService from "../services/studentService";
import LoadingContext from "../features/LoadingContext";
import StudentList from "./StudentList";

function Student({ persons, setPersons }) {
  const { students, setStudents } = useContext(PersonContext);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);
  const { loading, setLoading } = useContext(LoadingContext);

  const fileInputRef = useRef(null);

  const addPerson = (e) => {
    e.preventDefault();

    setLoading(true);

    const newPersonData = new FormData();
    newPersonData.append("image", newPhoto);
    newPersonData.append("firstName", newFirstName);
    newPersonData.append("lastName", newLastName);

    studentService
      .createStudent(newPersonData)
      .then((returnedPerson) => {
        setStudents(students.concat(returnedPerson));
        setNewFirstName("");
        setNewLastName("");
        fileInputRef.current.value = null;
      })
      .catch((error) => alert(error.response.data.error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <form
        onSubmit={addPerson}
        className="bg-white flex flex-col gap-2 p-2 border-solid border-2 border-black md:max-w-xl md:mx-auto"
      >
        <div className="flex flex-col">
          <label>Upload contact photo</label>
          <input
            className="border-solid border-2 border-slate-500 p-2"
            type="file"
            required
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => setNewPhoto(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            className="border-solid border-2 border-slate-500 p-2"
            type="text"
            required
            minLength={5}
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            className="border-solid border-2 border-slate-500 p-2"
            type="text"
            required
            minLength={11}
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>

        <button
          className="bg-black rounded-xl py-2 text-white font-bold"
          type="submit"
        >
          Add
        </button>
        <div className="laptop:flex laptop:flex-col laptop:items-center">
          <StudentList persons={persons} setPersons={setPersons} />
          <div className="flex flex-col items-center justify-center">
            {/* <button onClick={scrollToTop}>Scroll to Top</button> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Student;
