import * as React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/modules/header.module.scss';
import LogoImg from '../public/images/logo.svg';

const Header = ({ ...props }) => {
  const { toggleSidebar } = props;

  const handleCloseKeyup = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSidebar();
    }
  };
  const handleCloseKeydown = (event: React.KeyboardEvent) => {
    event.preventDefault();
  };

  return (
    <header
      className={`${styles.header} bg-tertiary-700 flex items-center w-full fixed top-0 left-0 z-40`}
    >
      <div className="header__menu">
        <div className="menu__button">
          <button
            className="px-2 font-semibold text-white transition-all duration-200 rounded-full hover:bg-primary-400 hover:text-black"
            onClick={toggleSidebar}
            onKeyUp={handleCloseKeyup}
            onKeyDown={handleCloseKeydown}
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
