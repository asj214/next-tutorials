import axios from "axios";
import { BASE_API_URL, TOKEN_KEY } from "../../config/constants";

export type AuthRegister = {
  email: string;
  name: string;
  password: string;
}

export type AuthLogin = {
  email: string;
  password: string;
}

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

const AuthAPI = {
  register: async (auth: AuthRegister) => {
    return await _axios.post('/auth/register', auth).catch((e) => {
      return e.response
    })
  },
  login: async (auth: AuthLogin) => {
    const resp = await _axios.post('/auth/login', auth).catch((e) => {
      return e.response
    })
    if (resp.status == 200) {
      localStorage.setItem(TOKEN_KEY, resp.data.token);
    }
    return resp;
  },
  fetchUser: async () => {
    return await _axios.get('/auth/me').catch((e) => {
      localStorage.removeItem(TOKEN_KEY);
      return e.response
    })
  }
}

export default AuthAPI;