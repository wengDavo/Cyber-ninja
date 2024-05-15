import { useAuthStore } from "../store/auth";
import useAxios from "../utils/useAxios";

export const fetchAndSetProfile = async () => {
  const api = useAxios();
  const setUser = useAuthStore.getState().setUser;

  try {
    const response = await api.get("profile/");
    const profile = response.data;
    setUser(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};
