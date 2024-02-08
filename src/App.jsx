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
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import teacherService from "./services/teacherService";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTeacher");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      teacherService.setToken(user.token);
    }
  }, []);
  return (
    <>
      <div>
        {user === null ? (
          <>
            <Routes>
              <Route path="/" element={<Landing />} /> /
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        ) : (
          <>
            {" "}
            <Navbar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kra1" element={<Kra1 />} />
              <Route path="/kra2" element={<Kra2 />} />
              <Route path="/kra3" element={<Kra3 />} />
              <Route path="/kra4" element={<Kra4 />} />
              <Route path="/plusFactor" element={<PlusFactor />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
}

export default App;
