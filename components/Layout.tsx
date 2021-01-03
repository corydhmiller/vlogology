import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';

const Layout = ({ ...props }) => {
  const { title, children } = props;
  // Handle the sidebar staate from Layout so that we can toggle sidebar from anywhere
  const [sidebarIsOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>{title} - Vlogology</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
