/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React from 'react';
import Link from 'next/link';

import styles from '../../styles/modules/sidebar.module.scss';
import LogoImg from '../../public/images/logo.svg';

const Sidebar: React.FunctionComponent<null> = () => {
  // Declare types for the menu section
  type MenuSectionTypes = {
    title: string;
    children: React.ReactNode;
  };
  // MenuSection refers to the clickable Title and following list of links
  const MenuSection = ({ title, children }: MenuSectionTypes) => {
    // Set up a ref for the toggle div
    const toggleRef = React.createRef<HTMLDivElement>();
    const contentRef = React.createRef<HTMLDivElement>();
    // Not sure if this state needs to be here or not
    const [setActive, setIsActive] = React.useState('');

    // Handle the click from the main menu element. This is super WIP
    const toggleActive = () => {
      setIsActive(setActive === '' ? 'active' : '');
    };
    const handleKeyUp = (e: React.KeyboardEvent) => {
      console.log(`did keyup with ${e}`);
      // if(e.key )
    };

    return (
      <div className={`menu_section ${setActive}`}>
        <div
          className={`${styles.toggle} text-xl font-bold cursor-pointer relative hover:text-black pl-2`}
          data-section={title}
          ref={toggleRef}
          onClick={toggleActive}
          onKeyUp={handleKeyUp}
          role="menuitem"
          tabIndex={0}
        >
          {title}
        </div>
        <div
          data-section={title}
          ref={contentRef}
          className={`${styles.content} transition-all duration-500 ease-in-out mb-2`}
        >
          {children}
        </div>
      </div>
    );
  };

  // Declare types for the menu links themselves
  type MenuLinkTypes = {
    link: string;
    children: React.ReactNode;
  };

  const MenuLink = ({ link, children }: MenuLinkTypes) => {
    // <MenuLink link="URL">CONTENT OF LINK</MenuLink>
    // May want to make that simpler and instead of using { children }
    return (
      <li className="pl-2 pb-2 leading-tight">
        <Link href={link} replace>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <aside
      className={`${styles.sidebar} flex flex-col overflow-y-scroll top-0 bg-black z-50 text-white lg:bg-gray-800`}
    >
      <div className={styles.close}>
        <div className={styles.menu__button}>
          <div
            className="button button--yellow button--menu button--inline"
            data-action="toggleMenu"
          >
            Close
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Link href="/">
            <a href="/">
              <LogoImg />
            </a>
          </Link>
        </div>
      </div>
      <nav>
        <div className={styles.nav}>
          <div className={styles.section}>
            <MenuSection title="Start">
              <ul>
                <MenuLink link="/start/why-vlog/">Why vlog?</MenuLink>
                <MenuLink link="/start/the-benefits-of-vlogging/">
                  The benefits of vlogging
                </MenuLink>
                <MenuLink link="/start/misconceptions-about-vlogging/">
                  Misconceptions about vlogging
                </MenuLink>
                <MenuLink link="/start/make-a-commitment/">
                  Make a commitment
                </MenuLink>
                <MenuLink link="/start/the-end-goal/">The end goal</MenuLink>
                <MenuLink link="/start/if-nothing-else-read-this-tldr/">
                  If nothing else READ THIS (TL; DR)
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className={styles.section}>
            <MenuSection title="Story">
              <ul>
                <MenuLink link="/story/your-greatest-advantage/">
                  Your greatest advantage
                </MenuLink>
                <MenuLink link="/story/im-not-interesting/">
                  &quot;I&apos;m not interesting&quot;
                </MenuLink>
                <MenuLink link="/story/telling-your-story/">
                  Telling your story
                </MenuLink>
                <MenuLink link="/story/getting-in-front-of-the-camera/">
                  Getting in front of the camera
                </MenuLink>
                <MenuLink link="/story/the-rubber-duck-technique/">
                  The Rubber Duck technique
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className={styles.section}>
            <MenuSection title="Gear">
              <ul>
                <MenuLink link="/gear/the-truth-about-gear/">
                  The truth about gear
                </MenuLink>
                <MenuLink link="/gear/the-best-camera-for-vlogging/">
                  The best camera
                </MenuLink>
                <MenuLink link="/gear/used-vs-new-gear/">vs.new gear</MenuLink>
                <MenuLink link="/gear/microphones-and-quality-audio/">
                  Microphones and quality audio
                </MenuLink>
                <MenuLink link="/gear/cameras-commonly-used-by-vloggers">
                  Cameras commonly used by vloggers
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className={styles.section}>
            <MenuSection title="Recording">
              <ul>
                <MenuLink link="/recording/1080-vs-4k-for-vlogging/">
                  1080 vs.4K for vlogging
                </MenuLink>
                <MenuLink link="/recording/getting-the-settings-right/">
                  Getting the settings right
                </MenuLink>
                <MenuLink link="/recording/moving-vs-stationary">
                  Moving vs.stationary
                </MenuLink>
                <MenuLink link="/recording/the-best-lighting-is-free">
                  The best lighting is free
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className={styles.section}>
            <MenuSection title="Edit">
              <ul>
                <MenuLink link="/edit/exploring-your-edit-style/">
                  Exploring your edit style
                </MenuLink>
                <MenuLink link="/edit/choosing-your-editing-software/">
                  Choosing your editing software
                </MenuLink>
                <MenuLink link="/edit/how-to-edit-your-vlogs-faster/">
                  How to edit your vlogs faster
                </MenuLink>
                <MenuLink link="/edit/color-correction-and-grading/">
                  Color correction and grading
                </MenuLink>
                <MenuLink link="/edit/hiring-an-editor/">
                  Hiring an editor
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className={styles.section}>
            <MenuSection title="Sharing">
              <ul>
                <MenuLink link="/sharing/define-a-rhythm/">
                  Define a rhythm
                </MenuLink>
                <MenuLink link="/sharing/choose-a-platform/">
                  Choose a platform
                </MenuLink>
                <MenuLink link="/sharing/map-out-your-schedule/">
                  Map out your schedule
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className={styles.section}>
            <MenuSection title="Time">
              <ul>
                <MenuLink link="/time/get-overnight-results/">
                  Get overnight results
                </MenuLink>
                <MenuLink link="/time/the-fear-of-wasted-time/">
                  The fear of wasted time
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className={styles.section}>
            <MenuSection title="Index">
              <ul>
                <MenuLink link="/about/">About</MenuLink>
                <MenuLink link="/index/recommended-viewing/">
                  Recommended Viewing
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
