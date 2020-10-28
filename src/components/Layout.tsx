import * as React from 'react';
import Head from 'next/head';

import Header from './Header';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';

const PageGrid = styled.div`
  grid-template-columns: 250px 1fr;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 0 1fr;
  }
  &.expand {
    @media screen and (max-width: 1024px) {
      grid-template-columns: 250px 1fr;
    }
  }
`;

type LayoutProps = {
  children: any,
  title: string
};

const Layout = ({ children, title }: LayoutProps) => (
  <>
    <Head>
      <title>{title} - Vlogology</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <PageGrid className="grid">
      <Sidebar />

      <PageWrapper>{children}</PageWrapper>
    </PageGrid>
  </>
);

export default Layout;
