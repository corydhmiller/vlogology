import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
import CopyBlock from '../../components/ui/CopyBlock';
import Blockquote from '../../components/ui/Blockquote';
import Button from '../../components/ui/Button';

const BenefitsOfVlogging = () => {
  return (
    <Page
      title="The benefits of vlogging"
      image="/images/pages/headers/the-benefits-of-vlogging.jpg"
    >
      <CopyBlock>
        <p>
          The idea of vlogging might sound great and all, but once you start
          adding up the investment of time and possibly money, the question of
          “is this even worth it?” will inevitably arise.
        </p>

        <p>
          The question of return on investment is a good one to explore. Why
          bother starting something if it has no tangible benefits?
        </p>

        <p>
          Here are a few of the benefits and returns that I (and others) have
          seen as a result of starting a vlog:
        </p>

        <h2 className="mt-8 mb-4 text-3xl font-bold border-yellow-400 border-b-sm">
          1. A vlog builds trust with your audience
        </h2>

        <p>
          Whether you’re building a business, growing a brand, or just wanting
          to do something as an individual, arguably{' '}
          <strong>the most important thing you need is trust.</strong>
        </p>

        <p>
          From a business standpoint, you want to sell more products, get more
          customers or clients, and stay in business (and hopefully grow!). If
          nobody knows who you are or has any confidence in your business, what
          makes you think they’ll actually buy from you?
        </p>

        <p>
          Anything you’re wanting to do starts with trust. Companies spend
          thousands, even millions of dollars on advertising, marketing, and
          branding to build a sense of awareness and familiarity, to increase
          trust from their potential customers.
        </p>

        <Blockquote>
          From the moment we are born, we are learning who we can trust.
        </Blockquote>

        <h2 className="mt-8 mb-4 text-3xl font-bold border-yellow-400 border-b-sm">
          2. A vlog gives you something to look back at
        </h2>

        <p>May 22, 2016. The day my daughter Melody was born.</p>

        <p>
          From a vlogging perspective, it was a disaster. I had recorded nearly
          the entire thing: leaving the house, driving to the hospital, getting
          settled, the little breaks I would take to recap what was going on, to
          finally meeting our new daughter.
        </p>

        <p>
          I recorded our first daughter Rylynn meeting Melody for the first
          time. I recorded family and friends coming in, the tears and laughter
          and joy.
        </p>

        <p>
          As I went to edit together the footage, I discovered that the SD card
          was corrupted. I had lost everything.
        </p>

        <p>
          Dealing with lost footage is a story for another time, but not to be
          daunted, I pulled out my iPhone and recorded a short several-minute
          clip in the hospital room with Melody. I uploaded it and went back to
          my family.
        </p>
      </CopyBlock>
    </Page>
  );
};

export default BenefitsOfVlogging;
