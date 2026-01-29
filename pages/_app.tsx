import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react'; // Added to debug
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Debugging: This will print in your browser console every time you change pages
  useEffect(() => {
    console.log("Route changed to:", router.asPath);
  }, [router.asPath]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Use a unique ID and key to ensure the browser sees this as a 'new' element on every page */}
      <div 
        id="page-wrapper"
        key={router.asPath} 
        className="page-fade-in"
      >
        <Component {...pageProps} />
      </div>
    </ReactLenis>
  );
}

export default MyApp;