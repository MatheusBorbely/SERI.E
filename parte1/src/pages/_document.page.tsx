import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../../stitches.config'


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,800&family=Roboto:wght@700&display=swap" rel="stylesheet" /> 
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
