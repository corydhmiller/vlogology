import * as React from 'react';
// import Image from 'next/image';
import Page from '../components/Page';
// UI
import CopyBlock from '../components/ui/CopyBlock';
import Button from '../components/ui/Button';
import Heading from '../components/ui/Heading';

const PageContent = () => {
  // const nextPage = '/time/the-fear-of-wasted-time';

  return (
    <Page title="About me">
      <CopyBlock>
        <div className="p-2 pr-4 mx-auto sm:pl-0 sm:float-left">
          <img
            src="/images/cory-miller.png"
            width="200"
            height="200"
            alt="Me, Cory Miller!"
          />
        </div>
        <Heading level="h2">My name is Cory Miller.</Heading>
        <p>
          I started vlogging on a whim. No goal, no direction, and no equipment.
          I just wanted to do this thing people called “vlogging”.
        </p>
        <p>
          Heck, when I approached my wife, about it, she literally said, “Do you
          have to?”
        </p>
        <p>
          It was hard. I showed up for 78 days, every single day, and produced a
          video for my YouTube channel. A daily show while having a family, a
          full-time job, and working on moving to another country.
        </p>
        <p>
          Eventually I moved to a weekly schedule. I began to develop
          techniques, things to save time during filming and editing. I planned,
          I made mistakes, and I pressed on.
        </p>
        <p>I didn’t even know if it would be worth it.</p>
        <p>Spoiler: It was.</p>
        <p>
          <strong>Vlogging is part of my life now,</strong> it’s simply part of
          what I do, and the personal benefits have been incredible.
        </p>
        <p>
          I’ve lived all around the world with my wife and two daughters, and I
          have a{' '}
          <a
            href="https://youtube.com/corydhmiller"
            target="_blank"
            rel="noopener noreferrer"
          >
            weekly vlog
          </a>{' '}
          about my international life, travel, and personal journey through this
          world.
        </p>
        <p>
          You can also{' '}
          <a
            href="https://twitter.com/corydhmiller/"
            target="_blank"
            rel="noopener noreferrer"
          >
            find me on Twitter
          </a>{' '}
          if you want to say hello or ask any questions!
        </p>

        <a
          href="https://www.youtube.com/channel/UCMWNYMEFQRbfvvt32wLn_UQ?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="yellow">Subscribe on YouTube »</Button>
        </a>
      </CopyBlock>
    </Page>
  );
};

export default PageContent;
