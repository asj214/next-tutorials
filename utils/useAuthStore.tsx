import { create } from "zustand";

interface User {
  id: Number | null,
  email: string,
  name: string
}

const useAuthStore = create((set) => ({
  user: {} as User,
  setUser: (data: User) => set({ user: data })
}))

export { useAuthStore }