import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/styles.scss';
import '../styles/tailwind.css';

function VlogologyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default VlogologyApp;
