/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Link from 'next/link';

import styles from '../../styles/modules/sidebar.module.scss';
import LogoImg from '../../public/images/logo.svg';

import MenuLink from './Sidebar/MenuLink';
import MenuSection from './Sidebar/MenuSection';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <aside
      className={`${styles.sidebar} flex flex-col bg-gray-800 z-50 text-white`}
    >
      <div className="fixed overflow-y-scroll top-0" style={{ maxWidth: 250 }}>
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
            <MenuSection
              title="Start"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink link="/start/why-vlog/" content="Why vlog?" />
                <MenuLink
                  link="/start/the-benefits-of-vlogging/"
                  content="The benefits of vlogging"
                />
                <MenuLink
                  link="/start/misconceptions-about-vlogging/"
                  content="Misconceptions about vlogging"
                />
                <MenuLink
                  link="/start/make-a-commitment/"
                  content="Make a commitment"
                />
                <MenuLink link="/start/the-end-goal/" content="The end goal" />
                <MenuLink
                  link="/start/if-nothing-else-read-this-tldr/"
                  content="If nothing else READ THIS (TL; DR)"
                />
              </ul>
            </MenuSection>

            <MenuSection
              title="Story"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink
                  link="/story/your-greatest-advantage/"
                  content="Your greatest advantage"
                />
                <MenuLink
                  link="/story/im-not-interesting/"
                  content='"I&apos;m not interesting"'
                />
                <MenuLink
                  link="/story/telling-your-story/"
                  content="Telling your story"
                />
                <MenuLink
                  link="/story/getting-in-front-of-the-camera/"
                  content="Getting in front of the camera"
                />
                <MenuLink
                  link="/story/the-rubber-duck-technique/"
                  content="The Rubber Duck technique"
                />
              </ul>
            </MenuSection>

            <MenuSection
              title="Gear"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink
                  link="/gear/the-truth-about-gear/"
                  content="The truth about gear"
                />
                <MenuLink
                  link="/gear/the-best-camera-for-vlogging/"
                  content="The best camera"
                />
                <MenuLink
                  link="/gear/used-vs-new-gear/"
                  content="vs.new gear"
                />
                <MenuLink
                  link="/gear/microphones-and-quality-audio/"
                  content="Microphones and quality audio"
                />
                <MenuLink
                  link="/gear/cameras-commonly-used-by-vloggers"
                  content="Cameras commonly used by vloggers"
                />
              </ul>
            </MenuSection>

            <MenuSection
              title="Recording"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink
                  link="/recording/1080-vs-4k-for-vlogging/"
                  content="1080 vs.4K for vlogging"
                />
                <MenuLink
                  link="/recording/getting-the-settings-right/"
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
              </ul>
            </MenuSection>

            <MenuSection
              title="Edit"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink
                  link="/edit/exploring-your-edit-style/"
                  content="Exploring your edit style"
                />
                <MenuLink
                  link="/edit/choosing-your-editing-software/"
                  content="Choosing your editing software"
                />
                <MenuLink
                  link="/edit/how-to-edit-your-vlogs-faster/"
                  content="How to edit your vlogs faster"
                />
                <MenuLink
                  link="/edit/color-correction-and-grading/"
                  content="Color correction and grading"
                />
                <MenuLink
                  link="/edit/hiring-an-editor/"
                  content="Hiring an editor"
                />
              </ul>
            </MenuSection>

            <MenuSection
              title="Sharing"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink
                  link="/sharing/define-a-rhythm/"
                  content="Define a rhythm"
                />
                <MenuLink
                  link="/sharing/choose-a-platform/"
                  content="Choose a platform"
                />
                <MenuLink
                  link="/sharing/map-out-your-schedule/"
                  content="Map out your schedule"
                />
              </ul>
            </MenuSection>

            <MenuSection
              title="Time"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink
                  link="/time/get-overnight-results/"
                  content="Get overnight results"
                />
                <MenuLink
                  link="/time/the-fear-of-wasted-time/"
                  content="The fear of wasted time"
                />
              </ul>
            </MenuSection>

            <MenuSection
              title="Index"
              menu={activeMenu}
              setActiveMenu={setActiveMenu}
            >
              <ul>
                <MenuLink link="/about/" content="About" />
                <MenuLink
                  link="/index/recommended-viewing/"
                  content="Recommended Viewing"
                />
              </ul>
            </MenuSection>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
