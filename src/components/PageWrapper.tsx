import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  top: 64px;
`;

type PageProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageProps) => {
  return <Main>{children}</Main>;
};

export default PageWrapper;
