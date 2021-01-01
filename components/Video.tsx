import * as React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ ...props }) => {
  const { children } = props;
  return <VideoWrapper className="shadow-yellow">{children}</VideoWrapper>;
};

export default Video;
