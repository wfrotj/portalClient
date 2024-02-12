import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Landing({ user, setUser }) {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet />
    </>
  );
}

export default Landing;
