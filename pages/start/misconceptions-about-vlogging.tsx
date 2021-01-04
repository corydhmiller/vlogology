import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
import CopyBlock from '../../components/ui/CopyBlock';
import Blockquote from '../../components/ui/Blockquote';
import Button from '../../components/ui/Button';
import Massive from '../../components/ui/Massive';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/start/make-a-commitment';

  return (
    <Page
      title="Misconceptions about vlogging"
      image="/images/pages/headers/misconceptions-about-vlogging.jpg"
    >
      <CopyBlock>
        <p>I’ve heard it all.</p>

        <ul className="mb-4">
          <li>Vlogging takes too much time.</li>
          <li>Vlogging doesn’t seem worth it.</li>
          <li>There are only one or two ways to do it.</li>
          <li>You have to have really good equipment before starting.</li>
          <li>There are already too many vlogs, so it won’t matter.</li>
          <li>
            I have to have everything <strong>perfect</strong> before starting.
          </li>
          <li>…and so on…</li>
        </ul>

        <p>
          All of these are valid concerns, but they are myths, plain and simple.
        </p>

        <p>
          Vlogology is dedicated to debunking all of these misconceptions (and
          more). We’ll get to all of these eventually, but as a head start
          here’s a quick cheat-sheet for some of the most common myths.
        </p>

        <Heading level="h2">
          Misconception: “Vlogging takes too much time.”
        </Heading>

        <p>
          Fact:{' '}
          <strong>
            vlogging will only take up the amount of time you allow.
          </strong>
        </p>

        <p>Read that sentence again. Four times if you have to.</p>

        <p>
          The danger of going on the internet and looking up vlogs is that for
          the most part you’ll find the popular vloggers and see how much work
          goes into it.
        </p>

        <p>
          Drone footage! Slow-mo shots! 4k resolution! External boom mics!
          Gimbals! Timelapses!
        </p>

        <p>
          Look, you <em>can</em> do those things. You can do whatever you want,
          which means you <em>don’t</em> have to do those things.
        </p>

        <p>
          My first YouTube vlog was holding up my smartphone, using the
          front-facing camera, and editing together a low-res video. Before
          that, when I would make silly “day in the life” videos on Facebook,
          I’d just use a little point-and-shoot camera and edit it using the
          built-in software on my laptop.
        </p>
      </CopyBlock>
      <Massive>
        You don’t have to start{' '}
        <span className="text-yellow-400 text-shadow-sm">fancy</span> (or go
        fancy at all.)
      </Massive>
      <CopyBlock>
        <p>
          Remember, <strong>a vlog is a story first and foremost.</strong> You
          can tell a story on a cinema-level camera or an Android phone from
          2010.
        </p>

        <p>
          Vlogging takes up as much time as you let it. If you don’t have a lot
          of time during the week but want to put a video up every Friday,
          arranging your schedule so you can film for twenty minutes on Tuesday,
          edit for thirty minutes on Wednesday, then upload on Friday, you can
          do that!
        </p>

        <p>
          If you want to make a visually stunning vlog every week and put in the
          time and effort it takes to make a beautiful video, you can do that
          too. You don’t <em>have</em> to, but you can.
        </p>

        <p>
          <strong>First figure out what kind of vlog you want to have,</strong>{' '}
          make a commitment (more on that on the next page), then determine the
          amount of time you want it to take.
        </p>

        <p>
          I’ve had weeks where the recording process was really light and
          editing only took 30-60 minutes, and I’ve had weeks where we traveled
          and I had dozens of gigabytes of footage and it took a couple{' '}
          <em>days</em> to edit a great vlog…and everything in between!
        </p>

        <p>
          Make the decision first, then allocate the time you can to make it
          great.
        </p>

        <Heading level="h2">
          Misconception: “There are only a few types of vlogs.”
        </Heading>
        <p>
          I’ve heard this a lot and it makes a lot of sense: some of the most
          popular vloggers that I follow have very similar styles and genres.
          The story may be different, but the execution seems the same.
        </p>
        <p>
          The main thing to notice there is how I said “vloggers that <em>I</em>{' '}
          follow”. It’s not actually that many people.
        </p>
        <p>
          <strong>
            The small pool of people that I notice and watch vlogs from is
            infinitesimal
          </strong>{' '}
          next to the amount of content creators there are on the internet.
        </p>
        <p>
          If you think there are only a few limited ways to vlog, you’re missing
          out on the bigger picture!
        </p>
        <Blockquote>
          How many ways are there to paint, draw, write, or create anything
          else?
        </Blockquote>
        <p>
          You can find your own style, even if it’s similar to someone else’s,
          but you also don’t have to just make what everyone else is making.
        </p>
        <p>Besides, your vlogs will be unique because they’ll be about you.</p>
        <Heading level="h2">
          Misconception: “You have to have really good equipment before
          starting.”
        </Heading>
        <p>
          I’ll get into this more in the Gear section, but let’s take care of
          this once and for all.
        </p>
        <p>
          You do not need to have good equipment. My first YouTube video was
          shot on the front-facing camera of a super-low quality tablet. Before
          that I had a little point-and-shoot that I used to make mini videos
          for my friends.
        </p>
        <p>
          You don’t need a DSLR. You don’t need image stabilization. You don’t
          need color grading or drones or cranes or dolly shots or special
          effects or 120 frames per second…you don’t need any of that.
        </p>
        <p>
          <strong>You just need something that records.</strong>
        </p>
        <p>
          You can always upgrade later, but the most important thing is starting
          with what you have.
        </p>

        <Heading level="h2">
          Misconception: “I have to have everything perfect before starting.”
        </Heading>
        <p>
          This held me back for a long time when I first started thinking about
          vlogging. I researched and researched and tried to get everything
          lined up perfectly, but it never came.
        </p>
        <Blockquote>Perfection is unattainable, plain and simple.</Blockquote>
        <p>Consider the following options:</p>
        <ul className="mb-4">
          <li>An imperfect result that exists</li>
          <li>A perfect result that does not exist</li>
        </ul>
        <p>Which is better? Obviously an imperfect result that exists!</p>
        <p>
          When you don’t make something because it’s not quite good enough,
          you’re fighting a losing battle. “Not good enough” never stops, and
          the hunger for “better” will always drive you.
        </p>
        <p>
          Putting something imperfect out there might be scary and uncomfortable
          at first, but it gets easier, and it has <em>actual</em> results as
          opposed to the non-existent alternative.
        </p>
        <p>
          Next up I want to talk about commitment and why you need to commit to
          something sooner rather than later.
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
