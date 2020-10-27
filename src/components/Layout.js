import * as React from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';


const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title} - Vlogology</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sidebar />
    <main className="container mx-auto">{children}</main>
  </>
);

export default Layout;
