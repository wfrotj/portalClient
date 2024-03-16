import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginService from "../services/loginService";
// import teacherService from "../services/teacherService";
import studentService from "../services/studentService";

function Login({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate("/");
  }, [user, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    loginService
      .login({
        username,
        password,
      })
      .then((res) => {
        window.localStorage.setItem("loggedTeacher", JSON.stringify(res));
        studentService.setToken(res);

        setUsername("");
        setPassword("");
        navigate("/");
        console.log(res);
      })
      .catch((error) => {
        alert(error.response.data.error);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <div className="login-form flex flex-col items-center justify-center h-screen">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
        <div>
          <p className="text-center">
            Don't have an account? <br></br>
            <Link
              to="/registration"
              className="text-black font-extrabold underline"
            >
              Register here.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
