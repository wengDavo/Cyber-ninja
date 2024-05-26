import { useEffect } from "react";
import { LoggedOutView } from "../components/Navbar";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import useAxios from "../utils/useAxios";
import { useAuthStore } from "../store/auth";
import { jwtDecode } from "jwt-decode";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          toast.error(error.response, {
            autoClose: 3000,
          });
        } else if (error.request) {
          toast.error(error.request, {
            autoClose: 3000,
          });
        } else {         
          toast.error(error.message, {
            autoClose: 3000,
          });
        }
      } finally {
        logout();
        toast.success("Successfully logged out!", {
          autoClose: 3000,
          toastId: 47,
        });
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
