import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Massive from '../../components/ui/Massive';

const IfNothingElse = () => {
  const nextPage = '/story/your-greatest-advantage';

  return (
    <Page
      title="If nothing else READ THIS (TL;DR)"
      image="/images/pages/headers/if-nothing-else-read-this-tldr.jpg"
    >
      <CopyBlock>
        <p>This whole site doesn’t matter if you never do anything about it.</p>
        <p>
          Any desire you have to start vlogging only matters when you actually
          start doing it. The greatest intentions never matter until they are
          backed up with action.
        </p>
        <p>
          Don’t use this resource as an excuse to not start.{' '}
          <strong>
            If this is the only thing you ever read, JUST GET STARTED.
          </strong>
        </p>
      </CopyBlock>
      <Massive>
        Seriously.{' '}
        <span className="text-yellow-400 text-shadow-sm">
          Just get started.
        </span>
      </Massive>
      <CopyBlock>
        <p>
          I was originally going to make this page with some shortcuts and
          fast-tracks to getting started, but that’s not going to be helpful for
          you. If you need specific help on one thing, I’ll be updating the
          Index with easy reference to topics and resources you need.
        </p>
        <p>
          Otherwise, go through the site. Read the words, watch the videos, get
          started.
        </p>
        <p>You can do it. You can make a great vlog.</p>
        <p>You just have to actually get started.</p>

        <div className="text-center mt-4">
          <Link href={nextPage}>
            <a href={nextPage}>
              <Button color="yellow">Continue Reading</Button>
            </a>
          </Link>
        </div>
      </CopyBlock>
    </Page>
  );
};

export default IfNothingElse;
