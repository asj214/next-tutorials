import _axios from "../axios";
import { TOKEN_KEY } from "../../config/constants";

export type AuthRegister = {
  email: string;
  name: string;
  password: string;
}

export type AuthLogin = {
  email: string;
  password: string;
}

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