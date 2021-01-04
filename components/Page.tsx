import * as React from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';
import styled from 'styled-components';
import Layout from './Layout';

const HeaderImage = styled.img`
  object-fit: cover;
  object-position: center center;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
`;

const Page = ({ ...props }) => {
  const { title, description, image, children } = props;

  const conditionalImage = () => {
    // This is janky af but I don't have the time
    if (image) {
      return <HeaderImage src={image} alt="" />;
    }
    return '';
  };

  return (
    <Layout title={title} description={description}>
      <div
        className={`relative w-full px-4 ${
          image === 'none' ? 'py-12' : 'py-24 md:py-40'
        } text-center bg-black`}
      >
        <div className="relative z-30 inline-block pb-8 border-yellow-400 border-b-md">
          <h1 className="font-bold leading-tight text-white text-screen md:text-6xl">
            {title}
          </h1>
        </div>

        {conditionalImage()}

        <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-t from-black" />
      </div>
      <section className="py-12">{children}</section>
      <footer className="mt-12">
        <div className="w-full h-full p-8 text-xs text-gray-500 bg-gray-200">
          Vlogology &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </Layout>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node.isRequired
};

Page.defaultProps = {
  image: false,
  description: undefined
};

export default Page;
