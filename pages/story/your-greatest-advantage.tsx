import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Massive from '../../components/ui/Massive';

const PageContent = () => {
  const nextPage = '/story/im-not-interesting';

  return (
    <Page
      title="Your greatest advantage"
      image="/images/pages/headers/your-greatest-advantage.jpg"
    >
      <CopyBlock>
        <p>You have something that no one else in the world has.</p>

        <p>
          Researchers have said an estimated 100 billion humans have lived on
          this planet over the course of its history. That’s a lot of people
          over a lot of time, yet you have something none of them ever had,
          something that nobody in the future will ever have.
        </p>

        <p>Can you guess what it is?</p>

        <p>
          <strong>You have your story.</strong>
        </p>

        <p>
          You have <em>your</em> story. It’s not just <em>a</em> story, it’s{' '}
          <em>your</em> story. No one else has ever lived a life exactly like
          yours, and no one else will ever live a life exactly like yours.
        </p>

        <p>
          Finding commonality with other people is always a treat. Living
          abroad, my ears always perk up when I hear someone talking with an
          American accent, because suddenly I have a different connection point.
          Sure, we may have
          <em>countless</em> other differences, but that common trait stands
          out.
        </p>

        <p>
          <strong>Friendships are the result of commonality.</strong> You’re
          talking with someone new, exploring what they like or dislike, and
          suddenly you realize you’re both really into Keanu Reeves’ movies.
        </p>

        <p>What does this have to do with your story?</p>

        <p>
          Sure, you and your newfound Keanu fan friend might share a common
          interest, but what led you to that point? Your lives have been wildly
          different, from upbringing with a specific family to places you lived
          to experiences you’ve had.
        </p>

        <p>The uniqueness of our lives is why commonality is so refreshing.</p>

        <p>
          Since{' '}
          <strong>nobody has ever had your story or lived your life,</strong>{' '}
          you have a great opportunity here.
        </p>

        <p>
          “But I’m not interesting,” I hear you say. “My life is boring. You
          don’t even know.”
        </p>

        <p>
          This is by far the number one reason why people don’t start vlogging
          or telling their story in any fashion. They look at their lives from
          their own perspective and think that because it’s “uninteresting” to
          them, it’ll be uninteresting to someone else (we’ll get into that in
          the next page).
        </p>
      </CopyBlock>
      <Massive>
        No one else has lived{' '}
        <span className="text-primary-400 text-shadow-sm">your life</span>.
      </Massive>
      <CopyBlock>
        <p>
          I can’t drive it home enough: your story is one of a kind! No one has
          had that story before. Ever.
        </p>

        <p>
          That also means you already have an abundance of original content!
        </p>

        <p>
          Imagine if every video you made was you telling a story from your
          childhood. Sure, maybe you don’t <em>want</em> to do that, but if you
          did,{' '}
          <strong>
            you already have many countless hours upon hours of content.
          </strong>
        </p>

        <p>
          “But I’m not interesting.” You might be thinking that. Many people
          have. In fact, most of the emails I get are from people struggling
          with not being “interesting”.
        </p>

        <p>Let’s talk about not being “interesting”.</p>

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
