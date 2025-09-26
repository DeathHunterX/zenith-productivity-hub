import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    if (error.response.status === 403) {
      // handle refresh token, if refresh token is expired, redirect to login page
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
