import axios from "axios";
// export const endpoint = "https://cyber-ninja-bckend.onrender.com/api/";

const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    // tiemout after 5 seconds
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default apiInstance;