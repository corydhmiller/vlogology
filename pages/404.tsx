import * as React from 'react';
import Page from '../components/Page';
import CopyBlock from '../components/ui/CopyBlock';

const WhyVlog: React.FunctionComponent<null> = () => {
  return (
    <Page title="Page not found">
      <CopyBlock>
        <div className="span_8 col center">
          <h2 className="mb-8 text-4xl font-bold">
            Seems that what you're looking for doesn't exist. Awkward.
          </h2>
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
