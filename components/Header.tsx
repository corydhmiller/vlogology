import * as React from 'react';
import Link from 'next/link';

import styles from '../styles/modules/header.module.scss';
import LogoImg from '../public/images/logo.svg';

const Header = ({ toggleSidebar }) => {
  return (
    <header
      className={`${styles.header} bg-black flex items-center w-full lg:hidden fixed top-0 left-0 z-40`}
    >
      <div className="header__menu">
        <div className="menu__button">
          <button
            className="button button--yellow button--menu button--inline"
            data-action="toggleMenu"
            onClick={toggleSidebar}
            onKeyUp={toggleSidebar}
            type="button"
          >
            Menu
          </button>
        </div>
      </div>
      <div className={`${styles.logo} ml-auto`}>
        <div className={styles.logo__image}>
          <Link href="/">
            <a href="/">
              <LogoImg />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
