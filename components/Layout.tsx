import * as React from 'react';
import Head from 'next/head';

import Header from './Header';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
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

export default Layout;
