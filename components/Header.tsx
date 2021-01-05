import * as React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/modules/header.module.scss';
import LogoImg from '../public/images/logo.svg';
// UI
import Button from './ui/Button';

const Header = ({ ...props }) => {
  const { toggleSidebar } = props;

  return (
    <header
      className={`${styles.header} bg-purple-700 flex items-center w-full fixed top-0 left-0 z-40`}
    >
      <div className="header__menu">
        <div className="menu__button">
          <button
            className="px-2 font-semibold text-white transition-all duration-200 rounded-full hover:bg-yellow-400 hover:text-black"
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

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default Header;
