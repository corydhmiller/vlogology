import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';

const Layout = ({ ...props }) => {
  const { title, description, children } = props;

  const siteURL = 'https://vlogology.com';
  const featuredImage = '/images/vlogology-featured-image.jpg';

  // Handle the sidebar staate from Layout so that we can toggle sidebar from anywhere
  const [sidebarIsOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>{title} - Vlogology</title>
        <meta charSet="utf-8" />
        <link rel="shortlink" href={siteURL} />
        <link rel="canonical" href={siteURL} />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="twitter:image" content={featuredImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={`${title} - Vlogology`} />
        <meta name="twitter:site" content="@coryhmiller" />
        <meta name="twitter:creator" content="@coryhmiller" />

        <meta name="description" content={description} />

        <meta property="og:image" content={featuredImage} />
        <meta property="og:title" content={`${title} - Vlogology`} />
        <meta property="og:url" content={siteURL} />
        <meta property="og:site_name" content="Vlogology" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
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
  description: PropTypes.string,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  description:
    'You want to start a vlog? Awesome! Vlogging is a fantastic way to document your life, business, brand, and anything else you could possibly think of. Break past the mental roadblocks and start a great vlog with FREE easy-to-follow lessons, tips, and techniques.'
};

export default Layout;
