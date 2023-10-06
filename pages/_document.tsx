import { Html, Head, Main, NextScript } from 'next/document'
import { GlobalNavbar } from '../components/common'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <GlobalNavbar />
        <div className="container">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}