import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const ImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: auto;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: var(--white);
  }
  50% {
    background-color: var(--gray-200);
  }
  100% {
    background-color: var(--white);
  }
`;

const Placeholder = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
  left: 0;
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Image = ({ ...props }) => {
  const { src, alt, width, height } = props;

  const refPlaceholder = React.useRef<HTMLDivElement>(null);

  const removePlaceholder = () => {
    if (refPlaceholder.current !== null) {
      refPlaceholder.current.remove();
    }
  };

  return (
    <ImageWrapper style={{ width, height: 'auto' }}>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Image;
