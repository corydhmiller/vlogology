import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Massive from '../../components/ui/Massive';
import Blockquote from '../../components/ui/Blockquote';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/gear/the-best-camera-for-vlogging/';

  return (
    <Page
      title="The truth about gear"
      image="/images/pages/headers/the-truth-about-gear.jpg"
    >
      <CopyBlock>
        <p>
          When I was first thinking about getting started with vlogging, I did
          what any semi-nerdy person would have done and dove deep into the
          internet, searching for the best gear.
        </p>

        <p>
          I read articles about cameras and gear reviews. I typed in “X camera
          vs Y camera” and opened up twenty tabs with different reviews and
          perspectives. I went on YouTube to find example videos shot on the
          camera I was looking at.
        </p>

        <p>It felt like it would never stop.</p>

        <p>
          Every time I thought I had it slightly narrowed down to what camera I
          wanted to buy and use, a new camera name would pop up that I would
          have to research, and the rabbit hole would begin again.
        </p>

        <p>
          <strong>Comparing gear and technology is a never-ending game.</strong>{' '}
          One camera has a flip-out screen, but its competitor has built-in
          image stabilization. Another camera has removable lenses, but yet
          another has a wider aperture for that delicious background blurriness.
        </p>

        <p>
          Of course, price played into it as well. I obviously couldn’t afford
          my dream camera, so I had to settle for something either not as good
          or not as new. Every time I would make a decision and work on saving
          up the money, I would hear about yet another camera that got an
          upgrade, and, you guessed it, that rabbit hole would begin yet again.
        </p>

        <Blockquote>
          Research is research until it’s procrastination.
        </Blockquote>

        <Heading level="h2">Keep gear from being a distraction</Heading>

        <p>
          I always hesitate to write about gear and cameras for this very
          reason. I don’t want to become part of this game. I don’t want to be
          the cause of hindrance for people wanting to get started with video.
        </p>

        <p>
          There <em>is</em> a real point to research, and I don’t want to
          discount that. Knowing what you’re buying and how long it will last
          and if it will actually serve the purpose you want is important.
        </p>

        <p>
          The problem comes when{' '}
          <strong>
            you keep researching ad infinitum and never <em>make</em> anything.
          </strong>
        </p>

        <p>Here’s the truth about gear:</p>
      </CopyBlock>
      <Massive>
        <span className="text-yellow-400 text-shadow-sm">
          Technology is already outdated
        </span>{' '}
        by the time you buy it.
      </Massive>

      <CopyBlock>
        <p>
          You’ll never have the best camera, because they’re already working on
          its successor. You’ll never have the most high-resolution sensor
          because they’re already working on a better one.
        </p>

        <p>
          Even more prominent:{' '}
          <strong>
            you’ll never have a video if you don’t have any camera at all.
          </strong>
        </p>

        <p>
          “But I like to research! I want to be sure about what I’m buying! I
          need to know <em>everything</em>!”
        </p>

        <p>
          Look, I get it. I do the same thing. I’ll spend hours, days, even
          weeks trying to make some kind of technology decision. The problem is
          I could have made a decision in half the time and already be ahead
          with what I’m wanting to make.
        </p>

        <p>
          <strong>
            Gear is important, but it’s not the most important thing.
          </strong>{' '}
          Making is the most important part of making anything. You can always
          upgrade later.
        </p>

        <p>
          This is simply to preface the next section about gear because I don’t
          want it to be a stumbling block for you. Don’t let the discussion
          about gear be the thing that holds you back.
        </p>

        <p>
          There are hundreds if not <em>thousands</em> of options, and any
          single one of them is better than having none at all.
        </p>

        <div className="mt-8 text-center">
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

export default PageContent;
