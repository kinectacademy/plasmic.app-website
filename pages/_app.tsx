import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactLenis } from 'lenis/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* No more Framer Motion - No more Glitches */}
      <Component {...pageProps} />
    </ReactLenis>
  );
}

export default MyApp;