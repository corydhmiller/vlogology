import * as React from 'react';
import Head from 'next/head';
import styles from '../../styles/modules/layout.module.scss';

import Header from './Header';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title} - Vlogology</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className={`grid ${styles.layout_grid}`}>
      <Sidebar />

      <PageWrapper>{children}</PageWrapper>
    </div>
  </>
);

export default Layout;
