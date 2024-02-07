import { useState } from "react";
import registerService from "../services/registerService";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [middleInitial, setMiddleInitial] = useState("");
  //   const [age, setAge] = useState("");
  //   const [employeeNumber, setEmployeeNumber] = useState("");
  //   const [depEdEmail, setDepEdEmail] = useState("");
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    registerService
      .register({
        username,
        password,
        firstName,
        lastName,
        //         middleInitial,
        //         age,
        //         employeeNumber,
        //         depEdEmail,
      })
      .then((res) => {
        //         console.log(res);
        navigate("/profile/login");
        setUsername("");
        setPassword("");
        setFirstName("");
        setLastName("");
        //         setMiddleInitial("");
        //         setAge("");
        //         setEmployeeNumber("");
        //         setDepEdEmail("");
        alert("Registration Successful! You can now log in");
      })
      .catch(() => alert("Error occured"));
  };
  return (
    <div>
      <h1>Registration</h1>

      <div>
        <form className="form" onSubmit={handleRegistration}>
          <div className="form-data">
            <div>
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Department</label>
              <input type="text" placeholder="MAPEH DEPARTMENT" disabled />
            </div>
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
            {/* <div>
              <label>Middel Initial</label>
              <input
                type="text"
                value={middleInitial}
                onChange={(e) => setMiddleInitial(e.target.value)}
              />
            </div>
            <div>
              <label>Age</label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label>Employee Number</label>
              <input
                type="text"
                value={employeeNumber}
                onChange={(e) => setEmployeeNumber(e.target.value)}
              />
            </div>
            <div>
              <label>Deped Email</label>
              <input
                type="text"
                value={depEdEmail}
                onChange={(e) => setDepEdEmail(e.target.value)}
              />
            </div> */}
          </div>
          <div>
            <button className="submit-form" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
