import { useAuthStore } from "../store/auth";
import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";

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
        console.log(error.message);
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
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchAndSetProfile();
  }, []);

  return { fetchAndSetProfile };
};

export default useProfileUpdater;
