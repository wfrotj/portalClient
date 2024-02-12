import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedTeacher");
    setUser(null);
  };

  return (
    <>
      <header>
        <div className="logo sticky">
          <img
            src="images/logoAnhs.jpg"
            alt="An awesome logo"
            className="h-20 w-30"
          />
        </div>
        <ul className="menu">
          <li className="dropdown">
            <span>RPMS &#9662;</span>
            <ul className="features-menu">
              <li>
                <Link className="link" to="/kra1">
                  KRA 1
                </Link>
              </li>
              <li>
                <Link className="link" to="/kra2">
                  KRA 2
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/kra3">KRA 3</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/kra4">KRA 4</Link>
              </li>
              <li>
                <Link to="/plusFactor">Plus Factor</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <div className="flex gap-2 justify-end  ">
          <button
            onClick={handleLogout}
            className="text-2xl hover:text-red-600 cursor-pointer "
          >
            {" "}
            Logout
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
