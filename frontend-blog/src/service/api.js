import axios, { isAxiosError } from 'axios';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseUrl: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return  processReponse(response);
    },
    function (error) {
        return Promise.reject(processError(error))
    }
);


