import { useEffect } from "react";
import { LoggedOutView } from "../components/Navbar";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/");
  }, []);
  // return <LoggedOutView title="You have been logged out"/>
};

export default Logout;
