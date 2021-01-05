import * as React from 'react';
import LazyLoad from 'react-lazyload';
import styles from '../styles/modules/video.module.scss';

const Video = ({ ...props }) => {
  const { children } = props;
  return (
    <div
      className={`${styles.video} shadow-yellow`}
      style={{ backgroundColor: 'black' }}
    >
      <LazyLoad>{children}</LazyLoad>
    </div>
  );
};

export default Video;
