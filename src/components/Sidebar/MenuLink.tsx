import * as React from 'react';
import Link from 'next/link';

// Declare types for the menu links themselves
type MenuLinkTypes = {
  link: string;
  content: string;
};

const MenuLink = ({ link, content }: MenuLinkTypes) => {
  // <MenuLink link="URL">CONTENT OF LINK</MenuLink>
  // May want to make that simpler and instead of using { children }
  return (
    <li className="pl-2 pb-2 pt-1 leading-tight">
      <Link href={link} replace>
        {content}
      </Link>
    </li>
  );
};

export default MenuLink;
