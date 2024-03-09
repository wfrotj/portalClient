import React from "react";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import studentService from "../services/studentService";
// import personService from "../services/personService";

function Learner({ people, setEditPerson, students, setStudents }) {
  const { firstName, lastName, photoInfo } = people;

  const editPerson = (person) => {
    setEditPerson(person);
  };

  const removeStudent = (id) => {
    studentService
      .deleteStudent(id)
      .then((_response) => {
        setStudents(students.filter((people) => people.id !== id));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };
  return (
    <div className="flex justify-between p-2 transition-all duration-300 hover:bg-slate-300">
      {" "}
      <div className=" flex flex-row items-center justify-space-around gap-6 laptop:gap-4 ">
        {/* <img
          className="w-20 h-20 rounded-full border-solid border-2 border-black"
          src={photoInfo.url}
          alt="image description"
        /> */}
        <div className="flex flex-col p-1">
          <p className="mobile:font-semibold tablet:font-bold text-lg">
            {firstName}
          </p>
          <p className="">{lastName}</p>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center gap-2 tablet:flex-row tablet:mr-8 laptop:flex-col laptop:gap-6">
        <FaUserEdit
          className="hover: cursor-pointer "
          onClick={() => editPerson(people)}
        />
        <FaTrashAlt
          className="hover: cursor-pointer"
          onClick={() => removeStudent(people.id)}
        />
      </div>
    </div>
  );
}

export default Learner;
