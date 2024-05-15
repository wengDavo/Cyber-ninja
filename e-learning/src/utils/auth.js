import { useAuthStore } from "../store/auth";
import axios from "./axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import useAxios from "./useAxios";

export const fetchProfile = async () => {
  const api = useAxios();
  try {
    const response = await api.get("profile/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch profile", error);
    return null;
  }
};

export const login = async (email, password) => {
  try {
    const { data, status } = await axios.post("token/", {
      email,
      password,
    });

    if (status === 200) {
      setAuthUser(data.access, data.refresh);
      // Fetch profile after successful login
      const profile = await fetchProfile();
      if (profile) {
        useAuthStore.getState().setUser(profile);
      }
      console.log(data);
      console.log("log");
    }
    return { data, error: null };
  } catch (error) {
    console.log("fail");
    return {
      data: null,
      error: error,
    };
  }
};

export const register = async (
  first_name,
  last_name,
  email,
  username,
  password,
  password2,
  user_type
) => {
  try {
    const { data } = await axios.post("register/", {
      first_name,
      last_name,
      email,
      username,
      password,
      password2,
      // phone_number,
      user_type,
    });
    await login(email, password);
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error || "Something went wrong",
    };
  }
};

export const logout = () => {
  console.log(Cookies.get("access_token"));
  console.log(Cookies.get("refresh_token"));
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  console.log(Cookies.get("access_token"));
  console.log(Cookies.get("refresh_token"));
  console.log("/");
  // setAuthUser(null);
  useAuthStore.getState().setUser(null);
};

export const setUser = async () => {
  // ON PAGE LOAD
  const accessToken = Cookies.get("access_token");
  const refreshToken = Cookies.get("refresh_token");
  if (!accessToken || !refreshToken) {
    return;
  }
  if (isAccessTokenExpired(accessToken)) {
    const response = await getRefreshToken(refreshToken);
    setAuthUser(response.access, response.refresh);
  } else {
    setAuthUser(accessToken, refreshToken);
  }
};

export const setAuthUser = (access_token, refresh_token) => {
  Cookies.set("access_token", access_token, {
    expires: 1,
    secure: true,
  });

  Cookies.set("refresh_token", refresh_token, {
    expires: 7,
    secure: true,
  });

  const user = jwtDecode(access_token) ?? null;

  if (user) {
    useAuthStore.getState().setUser(user);
  }
  useAuthStore.getState().setLoading(false);
};

export const getRefreshToken = async () => {
  const refresh_token = Cookies.get("refresh_token");
  const response = await axios.post("token/refresh/", {
    refresh: refresh_token,
  });
  return response.data;
};

export const isAccessTokenExpired = (accessToken) => {
  try {
    const decodedToken = jwtDecode(accessToken);
    return decodedToken.exp < Date.now() / 1000;
  } catch (err) {
    // Token is invalid or expired
    return true;
  }
};
