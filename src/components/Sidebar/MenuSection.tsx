import * as React from 'react';
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

  const handleSectionClick = () => {
    setActiveMenu(title);
  };
  const handleKeyUp = () => {};

  return (
    <div className={`${styles.section} menu_section`}>
      <div
        className={`${
          styles.toggle
        } text-xl font-bold cursor-pointer relative hover:text-black pl-2${
          menu === title ? ` text-black ${styles.toggle_selected}` : ''
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
          menu === title ? styles.visible : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuSection;
