import { useEffect } from "react";
import { LoggedOutView } from "../components/Navbar";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import useAxios from "../utils/useAxios";
import { useAuthStore } from "../store/auth";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const accessToken = localStorage.getItem("accessToken");
  const data = useAuthStore();
  const refreshToken = useAuthStore((state) => [data.refresh]);
  const api = useAxios();
  useEffect(() => {
    const logOutBck = async () => {
      try {
        if (refreshToken) {
          await api.post("logout/", { refresh: refreshToken });
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      } finally {
        logout();
        navigate("/");
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
      }
    };
    logOutBck();
  }, [api, navigate, refreshToken]);
  // return <LoggedOutView title="You have been logged out"/>
};

export default Logout;
