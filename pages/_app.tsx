"use client";
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowTransitions, setAllowTransitions] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setAllowTransitions(true);
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="app-container">
          <Component {...pageProps} />
        </div>
      </ReactLenis>
    );
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
      {!allowTransitions && (
        <style jsx global>{`
          * { transition: none !important; }
        `}</style>
      )}
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="app-container">
          <AnimatePresence 
            mode="popLayout" 
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <motion.div
              key={pathname || router.asPath}
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </ReactLenis>
    </>
  );
}

export default MyApp;
