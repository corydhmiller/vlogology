import * as React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';
import Blockquote from '../../components/ui/Blockquote';

const PageContent = () => {
  const nextPage = '/edit/choosing-your-editing-software';

  return (
    <Page title="Exploring your edit style">
      <CopyBlock>
        <p>
          Editing is arguably the most important step in the video production
          process. Of course every part is important, but the edit is where you
          craft the narrative of your video.
        </p>

        <p>
          Think of it as trying to speak in another language to someone else.
          You want your message to get across and you want the other person to
          understand your message.{' '}
          <strong>
            The edit is the interpreter that bridges the gap between you and
            your viewers.
          </strong>
        </p>

        <p>
          All that being said, don’t worry: you don’t have to craft a Hollywood
          masterpiece. You just need to put in enough work to make a compelling
          video that will be interesting to watch.
        </p>

        <p>
          In the beginning, of course, you’ll just want to focus on getting your
          videos done.{' '}
          <strong>Editing is a skill that improves over time.</strong>
        </p>

        <p>
          You may also lack the software necessary to do really cool editing you
          might see the pros do, and that’s okay! Anyone can make a vlog if they
          own something as common as a smartphone. It’s pretty much all built
          right in.
        </p>

        <p>Let’s talk about edit style and how it can form over time.</p>
        <Heading level="h2">Every editor has their own style</Heading>

        <p>
          Even though there are common trends that pop up, every editor uses
          their tools differently to produce results that make sense to them.
        </p>

        <p>
          For a vlogger, you’re kind of the director and editor, so your vision
          can be captured through the whole process.
        </p>

        <p>
          In the early stages of vlogging, or if you’re just barely getting
          started,{' '}
          <strong>the quality of the edit is not as important early on.</strong>{' '}
          It’s better to edit and learn and put the video out there than it is
          to scrutinize the details and never actually launch anything.
        </p>

        <p>
          Your edit style will form and shape over time. This is your chance to
          explore and try new things!
        </p>

        <p>
          In my first videos I tried to mount the camera in different locations
          as I did little monologues. I set it up on tripods and attached it to
          shelves.
        </p>

        <p>
          There was something about this style that didn’t quite fit me, though.
          I’m a very motion-oriented and kinetic sort of person, so movement
          actually played a lot into the energy of my vlogs (see{' '}
          <Link href="/recording/moving-vs-stationary/">
            <a href="/recording/moving-vs-stationary/">Moving vs. stationary</a>
          </Link>
          ).
        </p>

        <p>
          <strong>
            I only discovered my editing style by filming and editing more.
          </strong>
        </p>

        <p>The more you edit, the more your style comes out.</p>
        <Blockquote>
          <p>
            The editor you are <em>now</em> is largely based on the last video
            you edited.
          </p>
        </Blockquote>

        <p>
          This means you need to be editing regularly. Even if you don’t publish
          your videos online,{' '}
          <strong>
            you should be filming and editing weekly to build your skillset.
          </strong>
        </p>

        <p>
          “But Cory, I don’t have time to edit every week!” Don’t worry, I’ll be
          addressing editing fast in the next article.
        </p>
        <Heading level="h2">Emulate your favorite video creators</Heading>

        <p>
          Video is a great medium to get inspiration from because there’s so
          much of it in the world.
        </p>

        <p>
          Take some time to watch videos from creators you like online. Find a
          few cool mini films on Vimeo and see what you like about it. You could
          even take notes!
        </p>

        <p>
          Think about the edit. Is the editor utilizing jump cuts, where silence
          is completely cut out? Are there meaningful transitions that make
          sense? Is there enough breathing room on either side of a shot?
        </p>

        <p>
          Every video you see online is the result of someone thinking through
          how they want to portray the story and editing according to that goal.{' '}
          <strong>
            The more you edit, the more your style will show itself.
          </strong>
        </p>

        <p>
          Don’t worry about your style early on. Worry about getting the video
          done, and style will follow.
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
