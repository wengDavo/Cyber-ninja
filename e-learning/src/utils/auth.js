import { useAuthStore } from "../store/auth";
import axios from "./axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
// const api = useAxios();
// export const fetchProfile = async () => {
//   try {
//     const response = await api.get("profile/");
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch profile", error);
//     return null;
//   }
// };

export const login = async (email, password) => {
  try {
    const { data, status } = await axios.post("token/", {
      email,
      password,
    });

    if (status === 200) {
      setAuthUser(data.access, data.refresh);
      // Fetch profile after successful login
    }
    return { data, error: null };
  } catch (error) {
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
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
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
  try {
    const refresh_token = Cookies.get("refresh_token");
    const response = await axios.post("token/refresh/", {
      refresh: refresh_token,
    });
    return response.data;
  } catch (error) {
    if (
      error.response &&
      error.message === "Request failed with status code 401"
    ) {
      // Handle the blacklisted token scenario
      console.error("Refresh token is blacklisted:", error.response.data);
      // Perform any action you need to take when the token is blacklisted, such as logging out the user
      handleBlacklistedToken();
    } else {
      // Handle other errors
      console.error("Error refreshing token:", error);
      handleBlacklistedToken();
    }
    throw error; // Re-throw the error to propagate it if necessary
  }
};

const handleBlacklistedToken = () => {
  // Clear any tokens or user data
  Cookies.remove("refresh_token");
  Cookies.remove("access_token");
  // Redirect to login page or show a message to the user
  window.location.href = "/login"; // Or any other logic to handle the user session
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
