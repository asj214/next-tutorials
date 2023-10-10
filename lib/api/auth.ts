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

const AuthAPI = {
  register: async (auth: AuthRegister) => {
    return await _axios.post('/auth/register', auth).catch((e) => {
      return e.response
    })
  },
  login: async (auth: AuthLogin) => {
    const { data, status } = await _axios.post('/auth/login', auth).catch((e) => {
      return e.response
    })

    console.log(data);
    if (status == 200) {
      localStorage.setItem(TOKEN_KEY, data.token);
    }
    return data;
  }
}

export default AuthAPI;