import * as React from 'react';
import type { AppProps } from 'next/app';

// Load in Tailwind first to provide base styles
import '../styles/tailwind.css';
// Overriding styles until everything can be converted to Tailwind.
import '../styles/styles.scss';

import '../public/font/fonts.css';

function VlogologyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default VlogologyApp;
