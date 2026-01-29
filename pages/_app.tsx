import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactLenis } from 'lenis/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* We use a simple div with a CSS class that restarts on route change */}
      <div key={router.asPath} className="page-transition">
        <Component {...pageProps} />
      </div>
    </ReactLenis>
  );
}

export default MyApp;