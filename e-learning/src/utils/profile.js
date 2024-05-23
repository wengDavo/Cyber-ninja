import { useAuthStore } from "../store/auth";
import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useProfileUpdater = () => {
  const api = useAxios();
  const setUser = useAuthStore.getState().setUser;
  const [error, setError] = useState(null); // Define error state

  const fetchAndSetProfile = async () => {
    try {
      const response = await api.get("profile/");
      const profile = response.data;
      setUser(profile);
    } catch (error) {
      if (error.message === "Network Error") { 
        toast.error(error.message, {
          autoClose: 3000,
        });
        // setError(error.message);
      } else {
        // for (const field in error.response.data) {
        //   if (error.response.data.hasOwnProperty(field)) {
        //     // Log the error messages for each field
        //     console.log(error);
        //     console.log(`${field}: ${error.response.data[field]}`);
        //     setError(error?.response?.data || {});
        //   }
        // }
        toast.error(error, {
          autoClose: 3000,
        });;
      }
    }
  };

  useEffect(() => {
    fetchAndSetProfile();
  }, []);

  return { fetchAndSetProfile };
};

export default useProfileUpdater;
