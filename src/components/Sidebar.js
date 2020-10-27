import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../images/logo.svg';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = React.useState('');

  const MenuSectionToggle = ({ title }) => {
    const toggleRef = React.createRef();

    const handleClick = (e) => {
      // setOpenMenu(e);
      console.log(toggleRef.current.dataset);
      // e.classlist.toggle('sidebar__section--visible');
    };
    return (
      <div
        className="sidebar__section--toggle"
        data-section={title}
        ref={toggleRef}
        onClick={handleClick}
      >
        {title}
      </div>
    );
  };

  const MenuLink = ({ link, children }) => {
    return (
      <li className="pl-2 pb-2">
        <Link href={link} replace>
          {children}
        </Link>
      </li>
    );
  };

  const MenuSection = ({ title, children }) => {
    return (
      <>
        <MenuSectionToggle title={title} />
        <div
          data-section={title}
          className="sidebar__section--content transition-all duration-500 ease-in-out"
        >
          {children}
        </div>
      </>
    );
  };

  return (
    <aside className="sidebar flex flex-col overflow-y-scroll fixed top-0 bg-black z-50 text-white lg:bg-gray-800 lg:left-0">
      <div className="sidebar__close">
        <div className="menu__button">
          <div
            className="button button--yellow button--menu button--inline"
            data-action="toggleMenu"
          >
            Close
          </div>
        </div>
      </div>
      <div className="sidebar__logo">
        <div className="sidebar__logo__image">
          <Link href="/">
            <a>
              <LogoImg />
            </a>
          </Link>
        </div>
      </div>
      <nav>
        <div className="sidebar__nav">
          <div className="sidebar__section">
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
                  If nothing else READ THIS (TL;DR)
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Story">
              <ul>
                <MenuLink link="/story/your-greatest-advantage/">
                  Your greatest advantage
                </MenuLink>
                <MenuLink link="/story/im-not-interesting/">
                  "I'm not interesting"
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
          <div className="sidebar__section">
            <MenuSection title="Gear">
              <ul>
                <MenuLink link="/gear/the-truth-about-gear/">
                  The truth about gear
                </MenuLink>
                <MenuLink link="/gear/the-best-camera-for-vlogging/">
                  The best camera
                </MenuLink>
                <MenuLink link="/gear/used-vs-new-gear/">
                  Used vs. new gear
                </MenuLink>
                <MenuLink link="/gear/microphones-and-quality-audio/">
                  Microphones and quality audio
                </MenuLink>
                <MenuLink link="/gear/cameras-commonly-used-by-vloggers">
                  Cameras commonly used by vloggers
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Recording">
              <ul>
                <MenuLink link="/recording/1080-vs-4k-for-vlogging/">
                  1080 vs. 4K for vlogging
                </MenuLink>
                <MenuLink link="/recording/getting-the-settings-right/">
                  Getting the settings right
                </MenuLink>
                <MenuLink link="/recording/moving-vs-stationary">
                  Moving vs. stationary
                </MenuLink>
                <MenuLink link="/recording/the-best-lighting-is-free">
                  The best lighting is free
                </MenuLink>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
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
          <div className="sidebar__section">
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
          <div className="sidebar__section">
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
          <div className="sidebar__section">
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
