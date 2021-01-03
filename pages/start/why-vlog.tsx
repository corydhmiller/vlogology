import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';

const WhyVlog = () => {
  return (
    <Page title="Why vlog?" image="/images/pages/headers/why-vlog.jpg">
      <CopyBlock>
        <p>
          I remember the first time I told my wife I wanted to start vlogging.
        </p>

        <p>
          She sighed very deeply and I swear I saw her eyes roll a little bit.
        </p>

        <p>“Do you have to?” was all she said.</p>

        <p>
          I didn’t know much about vlogging beyond what I had I seen some of the
          big names on YouTube create. I had a bit of video experience, but
          nothing at the scale of daily or weekly video.
        </p>

        <p>
          Why did I want to start a vlog, then? What was the point? Was it
          because lots of popularity was building and I wanted to ride the wave?
        </p>

        <p>First, let’s get some definitions clear.</p>
      </CopyBlock>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="my-8 sm:pr-4 sm:mt-0">
          <div className="p-4 text-right bg-yellow-400 sm:p-12">
            <h2 className="font-serif text-5xl font-semibold">“vlog”</h2>
            <p>a short story or memory told through video</p>
          </div>
        </div>

        <CopyBlock>
          <p>
            The word “vlog” is a play on the word “blog”, which was shortened
            from “weblog” when popularity in online journals began to rise.{' '}
          </p>

          <p>
            In the early days of the internet, few people were using it for
            anything other than personal communication and information
            distribution. It was a tool, albeit a fascinating one.
          </p>

          <p>
            Slowly people began to realize that the internet gave them a voice
            they hadn’t had before. It was an opportunity to speak and to be
            heard.
          </p>

          <p>
            Thus the rise of the “weblog” (think keeping a log on the web)
            began. Platforms like Livejournal, Xanga, and Blogger rose up,
            offering users a place to pour out their thoughts, memories, and
            stories.
          </p>

          <p>Fast-forward a bit to 2005.</p>

          <p>
            A couple of engineers made a little video-sharing service. It wasn’t
            massive at launch, but it slowly grew in popularity until it was
            acquired by Google for $1.65 billion.
          </p>

          <p>YouTube had come to stay.</p>

          <p>
            A platform where{' '}
            <strong>
              you can make a video, upload it, and have it instantly seen by
              someone on the other side of the world
            </strong>{' '}
            wasn’t necessarily groundbreaking tech at the time, but it took off.
          </p>

          <p>Now back to the present.</p>
        </CopyBlock>
      </div>
      <div className="max-w-5xl px-4 my-12 ml-auto">
        <div className="font-bold leading-tight text-screen sm:text-6xl">
          It’s easier than ever to{' '}
          <span className="text-yellow-400 text-shadow-sm">
            publish something online
          </span>
          .
        </div>
      </div>
      <div className="w-full h-8 mb-12 ml-auto bg-yellow-400" />
      <div className="row end-xs">
        <div className="endbar endbar-right margin--l-bottom" />
      </div>
      <CopyBlock>
        <p>
          It’s now easier than ever to publish something online. All it takes is
          an idea, some work, and the tap of a button.
        </p>

        <p>
          Even if you’re not interested in <em>publishing</em> anything, it’s
          certainly easier than ever to <em>make</em> something, especially
          video.
        </p>

        <h2>But why have a vlog?</h2>

        <p>
          It might have seemed to come out of the blue when I told my wife I
          wanted to start vlogging, but I had actually been thinking about it
          for some time.
        </p>
        <p>
          The barrier to entry to having a voice has been lowered. The ability
          to make a movie, a short film, or a documentary has moved from out of
          reach to completely attainable.
        </p>
        <p>
          Twenty years ago, if you wanted to make some sort of video and have it
          reach dozens, hundreds, thousands, or even millions of people, you
          would need thousands of dollars, unbelievably expensive equipment, and
          some sort of far-reaching network that you probably couldn’t get
          access to more often than not.
        </p>

        <p>
          Nowadays,{' '}
          <strong>vlogging is literally as easy as tapping a button.</strong>
        </p>

        <p>People vlog for different reasons:</p>

        <ul className="mb-4">
          <li>
            Some vlog to <strong>document their life and journey.</strong>
          </li>
          <li>
            Some vlog to <strong>share humorous moments and skits.</strong>
          </li>
          <li>
            Some vlog to <strong>inform the world</strong> what is happening in
            their corner.
          </li>
          <li>
            Some vlog to <strong>build brand awareness and trust.</strong>
          </li>
        </ul>

        <p>
          There are plenty of other reasons to start a vlog, and my goal with
          Vlogology is to take you from, “I want to, but I don’t know how,” to
          “yeah, maybe I could do that,” to “I’m going to start tomorrow.”
        </p>

        <p>
          <strong>
            Vlogging has been one of the most rewarding things I’ve done in the
            last few years,
          </strong>{' '}
          and on the next page I’ll share some of the great benefits of starting
          a vlog.
        </p>
        <div className="text-center">
          <Link href="/start/the-benefits-of-vlogging/">
            <a href="/start/the-benefits-of-vlogging/">
              <Button color="yellow">Continue Reading</Button>
            </a>
          </Link>
        </div>
      </CopyBlock>
    </Page>
  );
};

export default WhyVlog;
