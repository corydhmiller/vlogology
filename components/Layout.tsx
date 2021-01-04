import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';

const MAIN_URL = 'https://vlogology.com';

const Layout = ({ ...props }) => {
  const { title, children } = props;
  // Handle the sidebar staate from Layout so that we can toggle sidebar from anywhere
  const [sidebarIsOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>{title} - Vlogology</title>
        <meta charSet="utf-8" />
        <link rel="shortlink" href={MAIN_URL} />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="/images/vlogology-featured-image.jpg"
        />
        <meta
          name="twitter:image"
          content="/images/vlogology-featured-image.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Header
        toggleSidebar={() => {
          setSidebarOpen(!sidebarIsOpen);
        }}
      />
      <div>
        <Sidebar
          sidebarIsOpen={sidebarIsOpen}
          toggleSidebar={() => {
            setSidebarOpen(!sidebarIsOpen);
          }}
        />
        <PageWrapper>{children}</PageWrapper>
      </div>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Layout;
