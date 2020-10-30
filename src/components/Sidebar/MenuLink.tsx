import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LineItem = styled.li`
  a:before {
    font-size: 10px;
    content: '►';
    line-height: 0;
    left: 0;
    position: absolute;
    top: 0.75rem;
    color: #f7dd38;
    margin-right: 0.35rem;
  }
`;

// Declare types for the menu links themselves
type MenuLinkTypes = {
  link: string;
  content: string;
};

const MenuLink = ({ link, content }: MenuLinkTypes) => {
  // <MenuLink link="URL">CONTENT OF LINK</MenuLink>
  // May want to make that simpler and instead of using { children }
  return (
    <LineItem className="pl-2 pb-2 pt-1 leading-tight">
      <Link href={link} replace>
        {content}
      </Link>
    </LineItem>
  );
};

export default MenuLink;
