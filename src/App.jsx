import { useNavigate } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Kra1 from "./pages/Kra1";
import Kra2 from "./pages/Kra2";
import Kra3 from "./pages/Kra3";
import Kra4 from "./pages/Kra4";

import Registration from "./components/Registration";
import Login from "./components/Login";
import Landing from "./components/Landing";

import PlusFactor from "./pages/PlusFactor";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Student from "./components/Student";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import studentService from "./services/studentService";
import PersonContext from "./features/PersonContext";
import LoadingContext from "./features/LoadingContext";
// import teacherService from "./services/teacherService";

function App() {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTeacher");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      studentService.setToken(user.token);
    }
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <PersonContext.Provider value={{ students, setStudents }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <Routes>
            <Route
              path="/login"
              element={<Login setUser={setUser} user={user} />}
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Landing user={user} setUser={setUser} />}>
              <Route index element={<Home />} />
              <Route path="plusFactor" element={<PlusFactor />} />
              <Route path="kra1" element={<Kra1 />} />
              <Route path="kra2" element={<Kra2 />} />
              <Route path="kra3" element={<Kra3 />} />
              <Route path="kra4" element={<Kra4 />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="learner"
                element={
                  <Student
                    students={students}
                    setStudents={setStudents}
                    user={user}
                    setUser={setUser}
                  />
                }
              />
            </Route>
          </Routes>
        </LoadingContext.Provider>
      </PersonContext.Provider>
    </>
  );
}

export default App;
