import axios from "axios";
import { BASE_API_URL } from "../../utils/constants";

export type AuthRegister = {
  email: string;
  name: string;
  password: string;
}

export type AuthLogin = {
  email: string;
  password: string;
}

const instance = axios.create({
  baseURL: BASE_API_URL
});

const AuthAPI = {
  register: async (auth: AuthRegister) => {
    return await instance.post(
      `${BASE_API_URL}/auth/register`,
      auth
    ).catch((e) => {
      return e.response
    })
  },
  login: (auth: AuthLogin) => {
    console.log(auth);
  }
}

export default AuthAPI;