import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from "../config";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: api.dev.base,
    headers: {
        "Content-type": "application/json"
    },
    timeout: 10000,
    timeoutErrorMessage: "Timeout Error, ",
});

export default axiosInstance;