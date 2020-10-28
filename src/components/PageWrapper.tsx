import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  top: 64px;
`;

type PageProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FunctionComponent<null> = ({
  children
}: PageProps) => {
  return <Main className="relative">{children}</Main>;
};

export default PageWrapper;
