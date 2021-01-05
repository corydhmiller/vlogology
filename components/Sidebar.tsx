import * as React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/modules/sidebar.module.scss';

import MenuLink from './Sidebar/MenuLink';
import MenuSection from './Sidebar/MenuSection';

const Sidebar = ({ ...props }) => {
  const { sidebarIsOpen, toggleSidebar } = props;
  const [activeMenu, setActiveMenu] = React.useState();
  const handleCloseKeyup = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSidebar();
    }
  };
  const handleCloseKeydown = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <aside
      id="sidebar"
      style={{ backgroundColor: '#1c142e' }}
      className={`${
        styles.sidebar
      } flex flex-col  z-50 text-white fixed overflow-y-scroll top-0 h-screen ${
        sidebarIsOpen ? styles.sidebar_open : ''
      }`}
    >
      <div className={styles.close}>
        <div className={styles.menu__button}>
          <button
            type="button"
            className="px-2 font-semibold text-white transition-all duration-200 rounded-full hover:bg-yellow-400 hover:text-black"
            onClick={toggleSidebar}
            onKeyUp={handleCloseKeyup}
            onKeyDown={handleCloseKeydown}
          >
            Close
          </button>
        </div>
      </div>

      <nav>
        <div className={`${styles.nav} mt-4`}>
          <MenuSection
            title="Start"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink link="/start/why-vlog" content="Why vlog?" />
            <MenuLink
              link="/start/the-benefits-of-vlogging"
              content="The benefits of vlogging"
            />
            <MenuLink
              link="/start/misconceptions-about-vlogging"
              content="Misconceptions about vlogging"
            />
            <MenuLink
              link="/start/make-a-commitment"
              content="Make a commitment"
            />
            <MenuLink link="/start/the-end-goal" content="The end goal" />
            <MenuLink
              link="/start/if-nothing-else-read-this-tldr"
              content="If nothing else READ THIS (TL; DR)"
            />
          </MenuSection>

          <MenuSection
            title="Story"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink
              link="/story/your-greatest-advantage"
              content="Your greatest advantage"
            />
            <MenuLink
              link="/story/im-not-interesting"
              content='"I&apos;m not interesting"'
            />
            <MenuLink
              link="/story/telling-your-story"
              content="Telling your story"
            />
            <MenuLink
              link="/story/getting-in-front-of-the-camera"
              content="Getting in front of the camera"
            />
            <MenuLink
              link="/story/the-rubber-duck-technique"
              content="The Rubber Duck technique"
            />
          </MenuSection>

          <MenuSection
            title="Gear"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink
              link="/gear/the-truth-about-gear"
              content="The truth about gear"
            />
            <MenuLink
              link="/gear/the-best-camera-for-vlogging"
              content="The best camera"
            />
            <MenuLink
              link="/gear/used-vs-new-gear"
              content="Used vs. new gear"
            />
            <MenuLink
              link="/gear/microphones-and-quality-audio"
              content="Microphones and quality audio"
            />
            <MenuLink
              link="/gear/cameras-commonly-used-by-vloggers"
              content="Cameras commonly used by vloggers"
            />
          </MenuSection>

          <MenuSection
            title="Recording"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink
              link="/recording/1080-vs-4k-for-vlogging"
              content="1080 vs.4K for vlogging"
            />
            <MenuLink
              link="/recording/getting-the-settings-right"
              content="Getting the settings right"
            />
            <MenuLink
              link="/recording/moving-vs-stationary"
              content="Moving vs.stationary"
            />
            <MenuLink
              link="/recording/the-best-lighting-is-free"
              content="The best lighting is free"
            />
          </MenuSection>

          <MenuSection
            title="Edit"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink
              link="/edit/exploring-your-edit-style"
              content="Exploring your edit style"
            />
            <MenuLink
              link="/edit/choosing-your-editing-software"
              content="Choosing your editing software"
            />
            <MenuLink
              link="/edit/how-to-edit-your-vlogs-faster"
              content="How to edit your vlogs faster"
            />
            <MenuLink
              link="/edit/color-correction-and-grading"
              content="Color correction and grading"
            />
            <MenuLink
              link="/edit/hiring-an-editor"
              content="Hiring an editor"
            />
          </MenuSection>

          <MenuSection
            title="Sharing"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink
              link="/sharing/define-a-rhythm"
              content="Define a rhythm"
            />
            <MenuLink
              link="/sharing/choose-a-platform"
              content="Choose a platform"
            />
            <MenuLink
              link="/sharing/map-out-your-schedule"
              content="Map out your schedule"
            />
          </MenuSection>

          <MenuSection
            title="Time"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink
              link="/time/get-overnight-results"
              content="Get overnight results"
            />
            <MenuLink
              link="/time/the-fear-of-wasted-time"
              content="The fear of wasted time"
            />
          </MenuSection>

          <MenuSection
            title="Index"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          >
            <MenuLink link="/about" content="About" />
            <MenuLink
              link="/index/recommended-viewing"
              content="Recommended Viewing"
            />
          </MenuSection>
        </div>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  sidebarIsOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default Sidebar;
