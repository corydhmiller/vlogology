import * as React from 'react';
import styles from '../styles/modules/video.module.scss';

const Video = ({ ...props }) => {
  const { children } = props;
  return <div className={`${styles.video} shadow-yellow`}>{children}</div>;
};

export default Video;
