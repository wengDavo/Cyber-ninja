import axios from 'axios';
import { API_BASE_URL } from './constants';
const anyAxios = () => {

    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
    });

    return axiosInstance;

};

export default anyAxios;