import axios from "axios";
import { BASE_API_URL, TOKEN_KEY } from "../config/constants";

const _axios = axios.create({
  baseURL: BASE_API_URL
});

_axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

_axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("interceptor >", error);
    return Promise.reject(error);
  }
);


export default _axios;