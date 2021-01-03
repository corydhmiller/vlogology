import * as React from 'react';
import styles from '../../styles/modules/copy-block.module.scss';

const CopyBlock = ({ ...props }) => {
  const { children } = props;
  return <div className={`${styles.block} mx-auto`}>{children}</div>;
};

export default CopyBlock;
