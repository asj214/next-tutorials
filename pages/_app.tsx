import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('### _app.tst::useEffect')
  }, []);
  return (
    <>
      <Component { ...pageProps } />
    </>
  );
}