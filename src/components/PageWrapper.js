import React from 'react';

import styled from 'styled-components';

const Main = styled.main`
  top: 64px;
`;

const PageWrapper = ({ children }) => {
  return <Main className="relative">{children}</Main>;
};

export default PageWrapper;
