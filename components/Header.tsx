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
      className={`${styles.header} bg-black flex items-center w-full lg:hidden fixed top-0 left-0 z-40`}
    >
      <div className="header__menu">
        <div className="menu__button">
          <Button
            color="yellow"
            onClick={toggleSidebar}
            onKeyUp={toggleSidebar}
          >
            Menu
          </Button>
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
