import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* We only use the favicon.ico to keep the browser happy without giant PNGs */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* This Wrapper ensures the background is NEVER empty/black */}
      <div className="app-container">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="page-wrapper"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default MyApp;