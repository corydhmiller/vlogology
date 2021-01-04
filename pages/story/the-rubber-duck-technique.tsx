import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Massive from '../../components/ui/Massive';

const PageContent = () => {
  const nextPage = '/gear/the-truth-about-gear/';

  return (
    <Page
      title="The Rubber Duck Technique"
      image="/images/pages/headers/the-rubber-duck-technique.jpg"
    >
      <CopyBlock>
        <p>
          The Rubber Duck technique is so simple and so silly that I had to
          share it. This may work for you, it may not.
        </p>

        <p>
          This technique stems from the previous page about getting in front of
          the camera. Looking at a camera and trying to record may make you
          nervous, and that’s okay!
        </p>

        <p>
          The Rubber Duck Technique consists of{' '}
          <strong>using a rubber duck in place of a camera</strong> and going
          about the vlogging process but using the rubber duck.
        </p>

        <p>I know.</p>

        <p>
          Instead of pointing the camera towards yourself and chatting about
          what you’re doing, you pick up the duck and talk to it in the same
          way. Set it up on a tripod and read your script, or take it with you
          downstairs to show off your new gaming setup.
        </p>

        <p>
          This is a <em>very</em> simple and <em>very</em> silly thing to do,
          but it actually accomplishes a few great things.
        </p>
        <ul>
          <li>
            It serves as a reminder that{' '}
            <strong>you don’t have to take vlogging so seriously.</strong>{' '}
            You’ll laugh a lot, probably feel silly, and might even chuck it
            across the yard after a minute or two.
          </li>
          <li>
            There’s no real substance to a rubber duck, so{' '}
            <strong>
              the intimidation factor of a camera’s weight goes away.
            </strong>
          </li>
          <li>
            <strong>Nothing is recorded,</strong> so you can say or do whatever
            you want because the duck doesn’t have a record button.
          </li>
        </ul>

        <p>
          Now, some people might look at this technique and think it’s
          ridiculous (they’d be right!) and actually feel <em>more</em>{' '}
          uncomfortable talking to a rubber duck then a camera. That’s{' '}
          <em>great!</em>
        </p>

        <p>
          If you feel less awkward getting in front of a camera than a rubber
          duck, there’s your answer.
        </p>
      </CopyBlock>
      <Massive>
        Forget the duck and{' '}
        <span className="text-yellow-400 text-shadow-sm">grab the camera</span>.
      </Massive>
      <CopyBlock>
        <p>
          The point of the duck is to{' '}
          <strong>make the idea of vlogging fun.</strong> You might not want to
          go outside your house or walk around town holding a rubber duck up
          because that might raise a few eyebrows, but the idea of it remains.
        </p>

        <p>
          There’s a little rubber duck that sits on my desk. As I write this,
          he’s perched up on my left speaker. He’s a Sherlock Holmes rubber
          duck, dressed in a spiffy suit with the classic Holmes deerstalker
          hat, holding a pipe and a magnifying glass.
        </p>

        <p>
          If you have a rubber duck, give it a try. If you don’t have a rubber
          duck,{' '}
          <strong>
            you should definitely{' '}
            <a
              href="https://amzn.to/2JMYVb1"
              target="_blank"
              rel="noopener noreferrer"
            >
              get a rubber duck
            </a>
          </strong>
          , and consider getting one that has a bit more character to it. I
          didn’t realize there were so many. They’re good ducks, Brent.
        </p>

        <p>And that’s the Rubber Duck Technique.</p>

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
