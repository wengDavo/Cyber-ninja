import axios from "axios";
// export const endpoint = "https://cyber-ninja-bckend.onrender.com/api/";

const apiInstance = axios.create({
  baseURL: "https://cyber-ninja-bckend.onrender.com/api/",
  // tiemout after 5 seconds
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiInstance;
