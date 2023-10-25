import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
import { useAuthStore } from '../utils/useAuthStore';

export default function App({ Component, pageProps }: AppProps) {
  const { fetchUser } = useAuthStore();

  useEffect(() => {
    console.log('### _app.tst::useEffect')
    fetchUser()
  }, []);
  return (
    <>
      <Component { ...pageProps } />
    </>
  );
}