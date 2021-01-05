import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';
import Blockquote from '../../components/ui/Blockquote';

const PageContent = () => {
  const nextPage = '/recording/the-best-lighting-is-free';

  return (
    <Page title="Moving vs. stationary">
      <CopyBlock>
        <p>
          Another question that you may want to answer is the type of movement
          you want to have in your vlog, if any. Do you hold the camera in front
          of you and walk around, or maybe just set it up on a tripod and talk
          to a stationary camera?
        </p>

        <p>
          One of the biggest benefits in defining your vlogging style is that{' '}
          <strong>you can literally choose anything you want.</strong> You know
          what you’re comfortable with and what sort of content you want to
          deliver.
        </p>

        <p>
          You could even do a combination of both, depending on the sort of
          videos you want to create. The sky is the limit.
        </p>

        <Heading level="h2">
          Understanding your context can define the movement
        </Heading>

        <p>
          Knowing the context of your content will help you figure out where to
          put the camera.{' '}
        </p>

        <p>
          For example, if you want to record your life as it happens and show
          different parts of your day, it may help to move the camera will you
          as you go.{' '}
        </p>

        <p>
          Conversely, if your content is more about teaching or communicating a
          particular message, a stationary shot may be best for that.
        </p>

        <p>
          These aren’t hard and fast rules.{' '}
          <strong>Play around with different styles,</strong> try out what it
          may look like to set the camera up and when to carry it.
        </p>

        <p>
          I like to mix it up. Probably 70-80% of my vlogs are moving, held by
          hand out in front of me, and the remainder might be set up on a tripod
          on my desk or elsewhere.
        </p>

        <p>
          This fits my own particular style and I’ve been able to dial it in
          consistently over time.
        </p>

        <Heading level="h2">
          Consider how your favorite movies handle movement
        </Heading>

        <p>
          I like to draw inspiration from movies I really like. I enjoy a
          variety of movies, ranging from action, sci-fi, comedy, and drama.
        </p>

        <p>
          Every movie has their own styles depending in the director and crew.
          The people who make the movie dictate how the camera moves, the
          fluidity of the edit, and the feel of the overall film.
        </p>

        <p>
          <strong>Think about your favorite movies</strong> (and maybe even go
          watch one or two). How does the camera move? When is it stationary? Is
          there a significant amount of movement versus still shots, or vice
          versa? Why?
        </p>

        <Blockquote>
          <p>
            Motion or lack thereof are parts of storytelling, enhancing or
            detracting from the message or story you want to deliver.
          </p>
        </Blockquote>

        <p>Knowing the difference comes with practice.</p>

        <Heading level="h2">Start with what you’re comfortable with</Heading>

        <p>
          Many people don’t like the idea of walking around with a camera and it
          feels more comfortable to set the camera on a tripod and talk to it.
          Others feel like it’s too formal to have a stationary camera and find
          more freedom walking around.
        </p>

        <p>
          Getting comfortable around the camera also means spending a good
          amount of time <em>in</em> the comfort zone and slowly pushing
          outward.
        </p>

        <p>
          <strong>
            Find the place that feels right for you and start there.
          </strong>{' '}
          You can always change it up later.
        </p>
      </CopyBlock>
      <CopyBlock>
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
