import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { NavigateFunction } from "react-router-dom";
import { triggerLogin } from "./helper";

// declare module 'axios' {
//     export interface AxiosRequestConfig {
//       _retry: boolean;
//     }
//   }

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
}

const onResponseError = async (error: AxiosError, navigate: NavigateFunction): Promise<AxiosError> => {
    const originalRequest = error.config;
    
    if (error.response?.status === 403) {
        //originalRequest._retry = true;
        triggerLogin().then(authres => {
            console.log('authres', authres.status);
            if (authres.status === 200) {
                axios.defaults.headers.common['test-id'] = '123';
                return axios(originalRequest);
                //navigate('/intercept');
            }
        });

    }
    console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance, navigate: NavigateFunction): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(response => onResponse(response),
        errorResponse => onResponseError(errorResponse, navigate));
    return axiosInstance;
}