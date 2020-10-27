import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../images/logo.svg';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = React.useState('');

  const handleClick = (e) => {
    setOpenMenu(e);
  };

  const MenuSectionToggle = ({ title }) => {
    return (
      <div
        className="sidebar__section--toggle"
        data-section={title}
        onClick={() => handleClick(title)}
      >
        {title}
      </div>
    );
  };

  const MenuSection = ({ title, children }) => {
    return (
      <>
        <MenuSectionToggle title={title} />
        <div
          data-section={title}
          className={
            'sidebar__section--content rounded-xl' +
            (openMenu === title ? ' sidebar__section--visible' : '')
          }
        >
          {children}
        </div>
      </>
    );
  };

  return (
    <aside className="sidebar border rounded grid sm:flex">
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
                <li>
                  <Link href="/start/why-vlog/" replace>
                    Why vlog?
                  </Link>
                </li>
                <li>
                  <Link href="/start/the-benefits-of-vlogging/" replace>
                    The benefits of vlogging
                  </Link>
                </li>
                <li>
                  <Link href="/start/misconceptions-about-vlogging/" replace>
                    Misconceptions about vlogging
                  </Link>
                </li>
                <li>
                  <Link href="/start/make-a-commitment/" replace>
                    Make a commitment
                  </Link>
                </li>
                <li>
                  <Link href="/start/the-end-goal/" replace>
                    The end goal
                  </Link>
                </li>
                <li>
                  <Link href="/start/if-nothing-else-read-this-tldr/" replace>
                    If nothing else READ THIS (TL;DR)
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Story">
              <ul>
                <li>
                  <Link href="/story/your-greatest-advantage/" replace>
                    Your greatest advantage
                  </Link>
                </li>
                <li>
                  <Link href="/story/im-not-interesting/" replace>
                    "I'm not interesting"
                  </Link>
                </li>
                <li>
                  <Link href="/story/telling-your-story/" replace>
                    Telling your story
                  </Link>
                </li>
                <li>
                  <Link href="/story/getting-in-front-of-the-camera/" replace>
                    Getting in front of the camera
                  </Link>
                </li>
                <li>
                  <Link href="/story/the-rubber-duck-technique/" replace>
                    The Rubber Duck technique
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Gear">
              <ul>
                <li>
                  <Link href="/gear/the-truth-about-gear/" replace>
                    The truth about gear
                  </Link>
                </li>
                <li>
                  <Link href="/gear/the-best-camera-for-vlogging/" replace>
                    The best camera
                  </Link>
                </li>
                <li>
                  <Link href="/gear/used-vs-new-gear/" replace>
                    Used vs. new gear
                  </Link>
                </li>
                <li>
                  <Link href="/gear/microphones-and-quality-audio/" replace>
                    Microphones and quality audio
                  </Link>
                </li>
                <li>
                  <Link href="/gear/cameras-commonly-used-by-vloggers/" replace>
                    Cameras commonly used by vloggers
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Recording">
              <ul>
                <li>
                  <Link href="/recording/1080-vs-4k-for-vlogging/" replace>
                    1080 vs. 4K for vlogging
                  </Link>
                </li>
                <li>
                  <Link href="/recording/getting-the-settings-right/" replace>
                    Getting the settings right
                  </Link>
                </li>
                <li>
                  <Link href="/recording/moving-vs-stationary/">
                    Moving vs. stationary
                  </Link>
                </li>
                <li>
                  <Link href="/recording/the-best-lighting-is-free/">
                    The best lighting is free
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Edit">
              <ul>
                <li>
                  <Link href="/edit/exploring-your-edit-style/" replace>
                    Exploring your edit style
                  </Link>
                </li>
                <li>
                  <Link href="/edit/choosing-your-editing-software/" replace>
                    Choosing your editing software
                  </Link>
                </li>
                <li>
                  <Link href="/edit/how-to-edit-your-vlogs-faster/" replace>
                    How to edit your vlogs faster
                  </Link>
                </li>
                <li>
                  <Link href="/edit/color-correction-and-grading/" replace>
                    Color correction and grading
                  </Link>
                </li>
                <li>
                  <Link href="/edit/hiring-an-editor/" replace>
                    Hiring an editor
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Sharing">
              <ul>
                <li>
                  <Link href="/sharing/define-a-rhythm/" replace>
                    Define a rhythm
                  </Link>
                </li>
                <li>
                  <Link href="/sharing/choose-a-platform/" replace>
                    Choose a platform
                  </Link>
                </li>
                <li>
                  <Link href="/sharing/map-out-your-schedule/" replace>
                    Map out your schedule
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Time">
              <ul>
                <li>
                  <Link href="/time/get-overnight-results/" replace>
                    Get overnight results
                  </Link>
                </li>
                <li>
                  <Link href="/time/the-fear-of-wasted-time/" replace>
                    The fear of wasted time
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
          <div className="sidebar__section">
            <MenuSection title="Index">
              <ul>
                <li>
                  <Link href="/about/" replace>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/index/recommended-viewing/" replace>
                    Recommended Viewing
                  </Link>
                </li>
              </ul>
            </MenuSection>
          </div>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
