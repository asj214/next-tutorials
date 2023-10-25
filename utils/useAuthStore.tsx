import { create } from "zustand";
import AuthAPI from "../lib/api/auth";

type User = {
  id: Number | null,
  email: string,
  name: string
}

type AuthStore = {
  user: User | null;
  fetchUser: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  fetchUser: async () => {
    const resp = await AuthAPI.fetchUser()
    if (resp.status === 200) {
      set({ user: resp.data })
    }
  }
  
}))

export { useAuthStore }