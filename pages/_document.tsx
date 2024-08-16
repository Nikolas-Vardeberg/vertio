import FlareCursor from 'components/shared/FlareCustom'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white" style={{ fontFamily: "Dovre Social, sans-serif"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
