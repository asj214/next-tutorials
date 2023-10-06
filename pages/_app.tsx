import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component { ...pageProps } />
    </>
  );
}