import * as React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/modules/sidebar.module.scss';

// Declare types for the menu section
type MenuSectionTypes = {
  title: string;
  children: React.ReactNode;
  menu: string;
  setActiveMenu: any;
};
// MenuSection refers to the clickable Title and following list of links
const MenuSection = ({
  title,
  children,
  menu,
  setActiveMenu
}: MenuSectionTypes) => {
  // Handle the click from the main menu element. This is super WIP

  const router = useRouter();

  const handleSectionClick = () => {
    setActiveMenu(title);
  };
  const handleKeyUp = () => {
    return true;
  };

  // Get first section of the route path, i.e. /start/why-vlog gives out start
  const routePath = () => router.route.toLowerCase().split('/')[1];

  const isMenuSelected = () =>
    menu === title || routePath() === title.toLowerCase();

  return (
    <div className={`${styles.section} menu_section`}>
      <div
        className={`${
          styles.toggle
        } text-xl font-bold cursor-pointer relative hover:text-black pl-2${
          isMenuSelected() ? ` text-black ${styles.toggle_selected}` : ''
        }`}
        data-section={title}
        onClick={handleSectionClick}
        onKeyUp={handleKeyUp}
        role="menuitem"
        tabIndex={0}
      >
        {title}
      </div>
      <div
        data-section={title}
        className={`${
          styles.content
        } transition-all duration-1000 ease-in-out mb-2 pt-2 ${
          isMenuSelected() ? styles.visible : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuSection;
