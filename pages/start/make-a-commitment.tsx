import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
import CopyBlock from '../../components/ui/CopyBlock';
import Blockquote from '../../components/ui/Blockquote';
import Button from '../../components/ui/Button';
import Massive from '../../components/ui/Massive';

const PageContent = () => {
  const nextPage = '/start/the-end-goal';

  return (
    <Page
      title="Make a commitment"
      image="/images/pages/headers/make-a-commitment.jpg"
    >
      <CopyBlock>
        <p>You need to make some sort of commitment before you start.</p>

        <p>
          It’s easy to say, “I’m going to do this thing!” But before you know
          it, the slog is real, the grind isn’t fun, and you’re not really sure
          why you’re doing any of this anymore.
        </p>

        <p>
          Making a commitment either to yourself or someone else reinforces what
          you’re doing.{' '}
          <strong>
            It gives you the opportunity to truly be serious about it.
          </strong>
        </p>

        <p>
          Some people might shy away from making a commitment because they
          aren’t too sure if it’s something they can stick to.
        </p>

        <p>
          However, a commitment doesn’t <em>have</em> to be long term. Saying
          you’re going to do something for a specific amount of time will
          actually be helpful while keeping your expectations reasonable.
        </p>

        <p>Here are a few examples of commitments you can make:</p>

        <ul className="mb-4">
          <li>I commit to making a vlog every week until March.</li>
          <li>I commit to making twelve vlogs this year.</li>
          <li>
            I commit to doing a daily vlog for two months to see if I can handle
            it.
          </li>
          <li>
            I commit to publishing a video on Monday and Thursday every week for
            six months.
          </li>
        </ul>

        <p>
          Notice with each commitment you have the opportunity give yourself a
          timeline, and I can’t recommend this enough.
        </p>

        <p>
          Commitments are very beneficial to productivity, but it’s easy to get
          caught up in something that is part of a creative pursuit and get
          burnt out because you don’t evaluate yourself at any point.
        </p>

        <p>
          Making a commitment attached to a timeline gives you the freedom to
          explore and make adjustments as necessary. In a sense, it gives you an
          “out” while also allowing you to really try something out.
        </p>

        <p>
          After your commitment timeline is over,{' '}
          <strong>
            you must honestly evaluate how the process of vlogging has been
            going.
          </strong>{' '}
          Make any course corrections you need to before going forward.
        </p>
        <h2>Evaluation questions</h2>

        <p>
          When I first started vlogging, I made a daily vlog for 78 days
          straight. It was incredibly fun, but also fairly brutal on my time and
          focus.
        </p>

        <p>
          I originally had given myself the evaluation deadline of 100 vlog
          episodes. It meant that I would do something for a specific period of
          time and then give myself that chance to evaluate it if it wasn’t
          working well.
        </p>

        <p>
          Setting a timeline also gave my wife an “out” of sorts. I wanted her
          to be on board, because vlogging probably meant she would be in it
          from time to time, and I didn’t want her to feel uncomfortable.
          Telling her I would evaluate everything <em>with her</em> at the end
          of 100 days meant she knew it had the capacity to change and evolve.
        </p>

        <p>
          At day 77, I was feeling really burnt out. I finally did my
          evaluation, and it was eye-opening.
        </p>

        <p>These are the questions I asked:</p>

        <ul className="mb-4">
          <li>Was this something that actually benefited my life?</li>
          <li>
            How do I feel about the idea of another timeline <em>double</em> the
            length of the last?{' '}
            <strong>Is that something I get excited about or dread?</strong>
          </li>
          <li>What needs to change going forward?</li>
        </ul>

        <p>
          For me, daily vlogging wasn’t sustainable. It was going to burn me
          out, and damage the quality I wanted for my vlogs.
        </p>
      </CopyBlock>
      <Massive>
        I needed to do something different or I needed to quit…and{' '}
        <span className="text-primary-400 text-shadow-sm">
          I didn’t want to quit
        </span>
        .
      </Massive>
      <CopyBlock>
        <p>
          I wasn’t excited about daily vlogging anymore. It had become a chore,
          and <strong>it was wearing me out.</strong> I didn’t want to quit
          though, so I decided I would switch to weekly vlogging.
        </p>

        <p>
          Of course, when I did switch to weekly vlogging, I made{' '}
          <em>another</em> commitment and gave it a timeline.
        </p>

        <p>
          <strong>
            You must make a commitment and give yourself a realistic timeline to
            evaluate.
          </strong>{' '}
          Always be checking yourself, always be evaluating, always be willing
          to change and adjust.
        </p>

        <p>
          Now vlogging is simply something that I do. The commitment has molded
          and evolved to fit my life. I did end up hitting 100 episodes, which
          was my original commitment, just in a different way than I had
          originally anticipated.
        </p>

        <p>This is my commitment now:</p>

        <Blockquote>I commit to releasing a vlog every Sunday.</Blockquote>

        <p>
          Notice that the timeline is short, the commitment is strong, and{' '}
          <strong>the commitment is both personal and public.</strong> If you
          want true accountability (and you should get it), get other people in
          on your commitment and have them hold you to it!
        </p>

        <p>
          <strong>Make a commitment.</strong> If you live with people, get them
          on board. Get your spouse or partner in on it, because you need their
          support.
        </p>

        <p>
          You’ll have an opportunity at the end of this section to share your
          commitment for some public accountability, but we’ll get to that in a
          bit.
        </p>

        <p>
          Next let’s talk about goals, “the end goal”, and actually aiming
          toward something.
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
