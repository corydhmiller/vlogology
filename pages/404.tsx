import * as React from 'react';
import Page from '../components/Page';
import CopyBlock from '../components/ui/CopyBlock';
import Heading from '../components/ui/Heading';

const WhyVlog: React.FunctionComponent<null> = () => {
  return (
    <Page title="Page not found">
      <CopyBlock>
        <div className="span_8 col center">
          <Heading level="h2">
            Seems that what you're looking for doesn't exist. Awkward.
          </Heading>
          <p className="center">
            You might try heading back to the{' '}
            <a href="https://vlogology.com">main page</a>, or if you think you
            arrived here by mistake,{' '}
            <a href="https://twitter.com/corydhmiller">
              let me know on Twitter
            </a>
            .
          </p>
        </div>
      </CopyBlock>
    </Page>
  );
};

export default WhyVlog;
