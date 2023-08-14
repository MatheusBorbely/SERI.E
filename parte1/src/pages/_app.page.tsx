import type { AppProps } from 'next/app';

import {TopBar} from './components/TopBar';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

import { globalStyles } from '@/styles/global';

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </> 
  )
}
