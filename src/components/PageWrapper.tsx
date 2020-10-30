import * as React from 'react';

import styles from '../../styles/modules/page_wrapper.module.scss';

type PageProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageProps) => {
  return (
    <main id="content" className={styles.content}>
      {children}
    </main>
  );
};

export default PageWrapper;
