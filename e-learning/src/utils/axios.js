import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // tiemout after 5 seconds
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default apiInstance;