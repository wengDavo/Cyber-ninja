import { useEffect } from "react";
import { LoggedOutView } from "../components/Navbar";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import useAxios from "../utils/useAxios";

const Logout = () => {
  const navigate = useNavigate();
  const api = useAxios();
  useEffect(() => {
    const logOutBck = async () => {
      try {
        const response = await api.post("logout/");
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          // Request made but the server responded with an error
          console.log(error.response);
        } else if (error.request) {
          // Request made but no response is received from the server.
          console.log(error.request);
        } else {
          // Error occured while setting up the request
          console.log("Error", error.message);
        }
      }
    };
    logOutBck();
    logout();
    navigate("/");
  }, [api]);
  // return <LoggedOutView title="You have been logged out"/>
};

export default Logout;
