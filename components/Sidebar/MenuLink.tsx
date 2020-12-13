import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/modules/menulink.module.scss';

// Declare types for the menu links themselves
type MenuLinkTypes = {
  link: string;
  content: string;
};

const MenuLink = ({ link, content }: MenuLinkTypes) => {
  const router = useRouter();

  // <MenuLink link="URL">CONTENT OF LINK</MenuLink>
  // May want to make that simpler and instead of using { children }
  return (
    <li className={`${styles.link} pl-2 pb-2 pt-1 leading-tight relative`}>
      <Link href={link}>
        <a
          className={`hover:bg-gray-500 text-white font-normal${
            router.route === link ? ' bg-gray-500' : ''
          }`}
          href={link}
        >
          {content}
        </a>
      </Link>
    </li>
  );
};

export default MenuLink;
