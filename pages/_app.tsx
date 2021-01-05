import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import * as Fathom from 'fathom-client';

// Load in Tailwind first to provide base styles
import '../styles/tailwind.css';
// Overriding styles until everything can be converted to Tailwind.
import '../styles/styles.scss';

import '../public/font/fonts.css';

function VlogologyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('PBECBCLF', {
      includedDomains: ['https://vlogology.com']
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default VlogologyApp;
