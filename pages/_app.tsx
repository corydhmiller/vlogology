import '../styles/styles.scss';
import '../styles/tailwind.css';

interface AppProps {
  Component: any,
  pageProps: any
}

function VlogologyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default VlogologyApp;
