import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
import CopyBlock from '../../components/ui/CopyBlock';
import Blockquote from '../../components/ui/Blockquote';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/start/if-nothing-else-read-this-tldr';

  return (
    <Page title="The end goal" image="/images/pages/headers/the-end-goal.jpg">
      <CopyBlock>
        <p>
          You’re interested in vlogging. You’ve heard a lot of great things
          about it, and hey, it even looks a bit fun!
        </p>
        <p>
          You might be ready to get started, but there’s one more thing we need
          to talk about:
        </p>
        <p>
          What’s the end goal? What does success look like for you with
          vlogging?
        </p>
        <p>
          At first glance, it might seem like the pinnacle of success is many
          thousands (or millions) of subscribers, tons of views, ad revenue, and
          popularity. To some, that might be their goal, and while I don’t fault
          them for that, those reasons are not personally compelling for me.
        </p>
        <p>
          If someone offered me a million subscribers at the cost of telling my
          story, I wouldn’t take it.
        </p>
        <p>
          Do you want to tell your story? Do you want to build trust? Do you
          want to document your life and work? Then start vlogging.
        </p>
        <p>
          <strong>Don’t worry about the numbers.</strong> The numbers are a
          byproduct of showing up and being real.
        </p>
        <p>
          Sure, I might have more subscribers if I “marketed” myself a bit more
          and spam-commented my channel in the comments sections of other
          videos, but those aren’t the kind of people I’m interested in
          following me. What about you?
        </p>
        <Heading level="h2">
          Success can look like a lot of different things.
        </Heading>
        <p>
          For some, vlogging has opened up doors for them to make a living on
          YouTube. For others, it was a platform to tell their stories and
          connect with people around the world.
        </p>
        <Blockquote>
          Ask yourself: why do you <em>really</em> want to start a vlog?
        </Blockquote>
        <p>
          <strong>If it’s for fame and glory, don’t bother.</strong> That’s not
          going to give you any kind of edge or one-of-a-kindness. People see
          right through that facade, and it will get you nowhere.
        </p>
        <p>
          Maybe you want to get a message out there. Maybe you want to have your
          opinions and thoughts heard, and perhaps by starting a vlog it will
          give you the means to connect with others who feel the same way.
        </p>
        <p>
          If you’re like me, success looks like showing up every week and making
          something new and sharing the journey.{' '}
          <strong>
            Success doesn’t have to happen in thirty years; it can happen today.
          </strong>
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
