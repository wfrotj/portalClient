import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Welcome to Educators Portal</h2>
      <div>
        <p>
          Do you have an account already ? <Link to="/login"> Login here</Link>
        </p>
        <p>
          No account yet? <Link to="/registration">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Landing;
