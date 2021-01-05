import * as React from 'react';
import Image from '../../components/ui/Image';
import Page from '../../components/Page';
import SubscribeForm from '../../components/SubscribeForm';
// UI
import CopyBlock from '../../components/ui/CopyBlock';

const PageContent = () => {
  // const nextPage = '/time/the-fear-of-wasted-time';

  return (
    <Page title="Get overnight results">
      <CopyBlock>
        <p>
          <strong>This lesson is on its way!</strong>
        </p>
        <p>
          Vlogology is live and available for you to learn from, and because I
          wanted to help people get started sooner, there’s still a bit of work
          to do, including adding this lesson!
        </p>
        <p>
          I’m adding new lessons and updating these pages as quickly as I can.
        </p>
        <p>
          <strong>Enter your email below to get first access</strong> when this
          lesson is published, and get a primer on the gear that I use for
          vlogging. You’ll also get regular emails with supplemental advice and
          ongoing steps to help you get vlogging.
        </p>
        <SubscribeForm />

        <p className="mt-4">I’ll see you inside!</p>
      </CopyBlock>
    </Page>
  );
};

export default PageContent;
