import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';
import Blockquote from '../../components/ui/Blockquote';

const PageContent = () => {
  const nextPage = '/edit/color-correction-and-grading';

  return (
    <Page title="How to edit your vlogs faster">
      <CopyBlock>
        <p>“I just don’t have time to edit videos.”</p>
        <p>I hear this all the time.</p>
        <p>
          Not having time to edit is one of the primary reasons (or excuses)
          people use that prevent them from getting started. They believe the
          editing process takes hours and hours, possibly even a few days, to
          get a solid video completed and uploaded.
        </p>
        <p>
          You don’t have to be a world class editor. You don’t have to have an
          Oscar to your name. You don’t have to have 100,000 subscribers on
          YouTube.
        </p>
        <p>
          You don’t have to have anything special. You can edit fast and still
          produce a great story.
        </p>
        <p>
          When I first started vlogging, I needed to edit fast because I was
          producing a video every day. I didn’t want to be up until 2am editing,
          so I changed my mindset and my workflow to highlight speed over
          anything else.
        </p>
        <p>
          Here are two quick ways you can speed up your editing and get your
          videos done in a single short session:
        </p>
        <Heading level="h2">Step 1: Edit chronologically</Heading>
        <p>
          A good editor looks at the scope of any given video project and
          utilizes the given footage to piece together a story that its viewers
          will actually want to watch.
        </p>
        <p>
          In most cases this means the video might be shot “out of order”,
          because the editor just needs the footage. They don’t care about the
          order they receive it in as long as it’s good enough to use.
        </p>
        <p>
          If you shoot your footage out of order, the process might look like
          this:
        </p>
        <ul className="mb-4">
          <li>Import footage to your video editing app</li>
          <li>
            Scan through all of the clips trying to find a good one to start
            with
          </li>
          <li>Add clip to timeline</li>
          <li>Find next clip, add to timeline</li>
          <li>Rinse and repeat until you die of old age</li>
          <li>Rearrange clips around to fit a story</li>
        </ul>
        <p>
          Even if you have segments that were shot together, this process can be
          much more tedious than a vlog usually requires.
        </p>
        <p>
          When you edit for speed, however, the order <em>does</em> matter.
        </p>
        <p>
          If you’re looking to edit for speed, you need to{' '}
          <strong>film and edit chronologically.</strong>
        </p>
        <p>
          Think about your day. What happens during the day? What is your
          schedule like?
        </p>
        <p>A very simple overview might be something like this:</p>
        <ul className="mb-4">
          <li>Wake up</li>
          <li>Shower</li>
          <li>Have breakfast and coffee</li>
          <li>Get ready for work</li>
          <li>Go to work</li>
          <li>Work</li>
          <li>Come home</li>
          <li>Have dinner</li>
          <li>Wind down</li>
          <li>Go to bed</li>
        </ul>
        <p>
          Again, this is a very simplified version of what someone’s day might
          be, but{' '}
          <strong>
            a chronological vlog edit simply follows the progression of a period
            of time,
          </strong>{' '}
          whether it’s a single day or an hour or even a few minutes.
        </p>
        <p>
          The beauty of editing chronologically is the edit process looks like
          this:
        </p>
        <ul className="mb-4">
          <li>Import footage to your video editing app</li>
          <li>
            Add <em>all</em> footage to the timeline
          </li>
          <li>Edit from the beginning to the end</li>
        </ul>
        <p>That’s it.</p>
        <p>
          When I sit down to edit, I drag all of the footage I’ve taken from
          that given week into Final Cut Pro X and begin my edit from the very
          first clip to the end.
        </p>
        <p>
          Sometimes I watch through all of the footage, other times I know
          exactly what has happened in my week and I blaze through the edit.
        </p>
        <Blockquote>
          Do not rearrange clips unless it is vital to the storytelling process.
        </Blockquote>
        <p>
          Very rarely do I move any clips around on my timeline. This slows down
          the process and often comes from overthinking.
        </p>
        <p>
          Sometimes you need to move a clip around because the flow works a bit
          better. Sometimes you might want to have your voice talking while the
          shot is of the surroundings. That’s fine, but I highly recommend
          getting your editing process solid before starting to do this.
        </p>
        <p>
          Let the story flow forward. 99 times out of 100 nobody is going to
          notice the things you notice.
        </p>
        <p>
          Remember, the point is to speed up your editing process, not to become
          Stephen Spielberg.
        </p>
        <p>
          <strong>
            Edit in two passes: one for the initial edit, the other to evaluate
            the full story
          </strong>{' '}
          and make any last fixes.
        </p>
        <p>
          After years of practice and shipping videos every week, I can
          typically edit a week’s worth of video footage in 60-75 minutes on a
          given edit day.
        </p>
        <p>
          It’s still a commitment, of course, but if your goal is speed,{' '}
          <strong>
            the chronological method will help you get your videos edited
            faster.
          </strong>
        </p>
        <Heading level="h2">Step 2: Use keyboard shortcuts</Heading>
        <p>
          If you use your computer to edit your blog, chances are you use
          several or maybe a handful of keyboard shortcuts to navigate the edit
          process.
        </p>
        <p>
          Oftentimes these come bundled with the software on arrival and you
          figure them out by guessing or looking up a few ones you’re familiar
          with. Pretty much every modern video editing software comes with
          shortcuts or has the ability to edit them yourself.
        </p>
        <p>Simply put, keyboard shortcuts are imperative to speed editing.</p>
        <p>
          You want to be watching your footage and making edits, not worrying
          about where your hands are or what the cursor is doing.
        </p>
        <p>
          I’ll give you some examples here and tell you how I use them to cut my
          editing time by 50 to 75%.
        </p>
        <p>
          Note: I use Final Cut Pro X for my primary editing software, but most
          apps allow you to set keyboard shortcuts.
        </p>
        <Heading level="h2">Stop using the mouse.</Heading>
        <p>
          The thing that slows me down the most in the editing process is using
          my mouse. I want my hands on the keyboard as much as possible so
          there’s less motion involved and less time wasted.
        </p>
        <p>Here’s a few of the most important keyboard shortcuts I use:</p>
        <ul className="mb-4">
          <li>
            <code>Spacebar</code>: Play/Pause the Timeline
          </li>
          <li>
            Most editors have this built right in so you don’t have to click any
            buttons in the interface. Tap the spacebar and you’re rolling.
          </li>
          <li>
            <code>S</code>: Navigate back to the current clip’s start.
          </li>
          <li>
            <code>D</code>: Navigate forward to the current clip’s end.
          </li>
          <li>
            Both <code>S</code> and <code>D</code> are your best friend. No more
            scrolling with the mouse or trackpad, you just tap the keys back and
            forth.
          </li>
          <li>
            In Final Cut Pro, the <code>Up</code> and <code>Down</code> keys do
            this as well by default, but I prefer navigating with my left hand.
          </li>
          <li>
            <code>Q</code> and <code>W</code> cut the clip at the current
            playhead location and trim before or after the cut, respectively.
          </li>
          <li>
            On FCPX this shortcut is called “Trim Start” or “Trim End”, on
            Premiere it’s “Ripple Edit Next/Previous Edit to Playhead”.
          </li>
          <li>
            <strong>This saves me so much time</strong> I can’t even say. The
            edits might be a bit choppy at first, but again, this is about
            speed.
          </li>
          <li>
            This trick prevents me from making manual cuts, deleting the extra
            clip I want to delete, then moving the clip to the right location.
            It simply does all of that automatically.
          </li>
          <li>
            <code>F</code>: Slice/Razor the clip at the current location.
          </li>
          <li>
            If I ever need to make a manual cut, I don’t want to be selecting
            tools from a toolbar. This shortcut grabs the clip and cuts it right
            at the playhead.
          </li>
          <li>
            <code>S</code>: Delete.
          </li>
          <li>
            This pairs well with the <code>F</code> key. I don’t want to have to
            reach over and tap <code>Delete</code> or, God forbid,{' '}
            <code>Shift + Delete</code>.
          </li>
          <li>
            <code>Shift + ←</code> and <code>Shift + →</code>: Go back or
            forward 10 frames.
          </li>
          <li>
            I like using the <code>←</code> and <code>→</code> keys to fine tune
            the frames, but if I just quickly need to get around the timeline,
            it’s nice to have a bit of extra speed if I need it.
          </li>
        </ul>
        <p>
          These are my most commonly used keyboard shortcuts, and though I have
          more, this is a great place to get started.
        </p>
        <p>
          <strong>
            Note: Some of these shortcuts are not the default in these apps!
          </strong>{' '}
          I have manually changed a few, so feel free to go nuts and change any
          of the shortcuts to your liking.
        </p>
        <Heading level="h2">
          Keyboard shortcuts take a bit of learning, but will save you hours
        </Heading>
        <p>
          Remember, we’re going for quick edits here. This means{' '}
          <strong>you need to optimize your workflow.</strong> Optimization may
          require you changing how you do things or even learning how to
          actually use keyboard shortcuts.
        </p>
        <p>
          You may get frustrated at first. You might have never used keyboard
          shortcuts before, and when you’ve tried changing it seems to take
          longer.
        </p>
        <p>
          Like anything, optimizing your workflow will require practice. You
          need to edit more, get a good feel down.
        </p>
        <p>
          Like anything, you’ll never get faster at your editing process if you
          don’t practice.
        </p>
        <Heading level="h2">
          Can you really edit a decent video in a short amount of time?
        </Heading>
        <p>Yes.</p>
        <p>
          On a good focused day, I can have a vlog edited, rendered, and
          uploaded in under an hour.
        </p>
        <p>
          Sometimes it takes longer, sometimes it doesn’t. Everything depends on
          the story I’m wanting to tell, but I refuse to sit at my computer for
          hours and hours getting these vlogs done, so my workflow adjusts to
          it.
        </p>
        <p>
          <strong>
            If you give yourself two hours to edit a video, you’ll get it done
            in two hours.
          </strong>{' '}
          If you only have a half hour, then put in a half hour’s worth of work
          and export it.
        </p>
        <p>
          Early on I was spending 2-3 hours editing short videos. I’ve been able
          to get that down to under 2 hours consistently, and often around an
          hour total.
        </p>
        <p>
          I recommend setting aside somewhere between 1-2 hours for a decent
          weekly vlog edit. It can be done, but you need to practice, become
          more efficient, and get a good workflow down.
        </p>
        <p>Be patient and work at it, the speed will come!</p>
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
