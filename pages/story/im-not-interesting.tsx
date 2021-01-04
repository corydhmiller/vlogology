import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Massive from '../../components/ui/Massive';
import Heading from '../../components/ui/Heading';
import Blockquote from '../../components/ui/Blockquote';

const PageContent = () => {
  const nextPage = '/story/telling-your-story/';

  return (
    <Page
      title="“I’m not interesting”"
      image="/images/pages/headers/im-not-interesting.jpg"
    >
      <CopyBlock>
        <p>Let me tell you a story.</p>
        <p>
          Meet Sam. She lives out in the country in Manitoba, Canada, where it
          snows quite a lot throughout the year. She’s grown up with the snow,
          it’s just part of life. There’s nothing really that interesting about
          it…it’s <em>just</em> snow, after all.
        </p>
        <p>
          Meet Michael. He lives in Buenos Aires, Argentina. He has never seen
          snow in his life and has no idea what it’s like to live in a place
          where it snows.
        </p>
        <p>
          One day, Sam decides to start a video series about what it’s like to
          live in Canada.
        </p>
        <p>
          She makes a video about walking outside into the snow. She shivers and
          breathes out, watching her breath tumble away from her and evaporate
          into the icy air. Sam chats about how the snow makes her hands lock up
          if she doesn’t have her gloves on, and dashes back inside to grab
          them.
        </p>
        <p>
          Every week that winter, Sam makes a video about her little town.
          Snowplows drive by, pushing up massive hills of snow onto the sides of
          the road. People walk by with several layers of clothes on, with those
          little toques with the bob on top.
        </p>
        <p>
          To Sam, this might seem overall a bit uninteresting. She sees it all
          the time, she grew up with it.
        </p>
        <p>
          But to Michael, these videos are <em>fascinating</em>. He laughs at
          the snowplow driving by and wonders what it’s like to be so cold your
          hands freeze up. He loves Sam’s weekly videos.
        </p>
      </CopyBlock>
      <Massive>
        To be interesting, you just need to{' '}
        <span className="text-yellow-400 text-shadow-sm">be you</span>.
      </Massive>
      <CopyBlock>
        <p>
          <strong>Interesting is subjective.</strong>
        </p>
        <p>
          You might not think your life is interesting, but you can’t truly
          objectively state that. You only have your own experience.
        </p>

        <p>
          When you say your life is uninteresting, you are telling other people
          that you are in charge of their opinions about you.
        </p>

        <p>
          To you, they don’t get to decide if you’re interesting or not, because
          it’s not up to them, right?
        </p>

        <p>
          <strong>
            You do not have the right to tell anyone else what they do or do not
            find interesting.
          </strong>
        </p>

        <p>
          There have been videos I’ve released that I’m not proud of. They felt
          boring, bland, and remarkably uninteresting. Some of these videos have
          received comments from people saying it was wonderful and they really
          resonated with it.
        </p>

        <p>
          It showed me that my opinion on my life and my work is <em>my</em>{' '}
          opinion, not anyone else’s. I never know how my next video is going to
          resonate with someone else.
        </p>
        <Heading level="h2">
          Still struggling with the “interesting” concept?
        </Heading>

        <p>
          Maybe you’re not convinced yet. You still don’t think your life is
          interesting enough to make videos about.
        </p>

        <p>Here’s a different question you can ask:</p>

        <Blockquote>
          “What can I do to make today interesting for <em>me</em>?”
        </Blockquote>

        <p>
          If your life isn’t interesting to <em>you</em>, how could you change
          that? How could you record what you do throughout the day in a way
          that makes it look compelling to you?
        </p>

        <p>
          When I’m going through my week and I realize I haven’t been filming
          much which will end up resulting in a short and terrible vlog, I grab
          my camera and do <em>something.</em> I might tell a story, show
          something I’m doing from a new perspective, or give a life update.
        </p>

        <p>
          <strong>I force myself to think creatively</strong> so I can meet my
          commitment. If you want to create, it’s time to get creative!
        </p>

        <p>
          One of the best ways to create fresh and new content is to tell your
          story in pieces. We’ll get into what it can look like to tell your
          story on the next page.
        </p>

        <p>
          Remember, you don’t get to tell people they can’t find you
          interesting.{' '}
          <strong>
            Your life can be interesting to anyone who hasn’t lived it,
          </strong>{' '}
          which is quite a lot of people.
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
