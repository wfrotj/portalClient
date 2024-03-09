import { useEffect, useContext } from "react";

import PersonContext from "../features/PersonContext";

import Learner from "./Learner";
import studentService from "../services/studentService";

function StudenList({ setLoading, persons, setPersons }) {
  const { students, setStudents } = useContext(PersonContext);

  useEffect(() => {
    studentService
      .getStudents()
      .then((response) => {
        setStudents(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-4 laptop:grid laptop:grid-cols-3 tablet:grid tablet:grid-cols-2">
      {students.map((people, index) => (
        <Learner
          key={index}
          people={people}
          setStudents={setStudents}
          students={students}
        />
      ))}
    </div>
  );
}

export default StudenList;
