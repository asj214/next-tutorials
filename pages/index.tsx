import { useAuthStore } from "../utils/useAuthStore";

export default function Page() {
  const { user } = useAuthStore();

  return (
    <>
      {user ? (<h1>Hello, {user.name}</h1>) : (<h1>Hello, Next.js</h1>)}
    </>
  );
}