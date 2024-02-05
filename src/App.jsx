import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Kra1 from "./pages/Kra1";
import Kra2 from "./pages/Kra2";
import Kra3 from "./pages/Kra3";
import Kra4 from "./pages/Kra4";

import PlusFactor from "./pages/PlusFactor";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        {" "}
        <Navbar />
      </div>

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
  );
}

export default App;
