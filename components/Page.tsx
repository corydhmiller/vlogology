import * as React from 'react';
import PropTypes from 'prop-types';
// import Image from 'next/image';
import Layout from './Layout';

const Page = ({ ...props }) => {
  const { title, description, children } = props;

  return (
    <Layout title={title} description={description}>
      <div
        className="w-full py-12 mb-8 text-center rounded-br-lg sm:mb-12 sm:py-24 sm:w-7/12 bg-gradient-to-br from-tertiary-600 to-tertiary-700 "
        style={{ boxShadow: '3px 3px 63px var(--tertiary-400)' }}
      >
        <div className="z-30 inline-block px-4 pb-8">
          <h1 className="font-bold leading-tight text-white text-screen sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </div>
      <section className="py-12 text-lg">{children}</section>
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
  children: PropTypes.node.isRequired
};

Page.defaultProps = {
  description: undefined
};

export default Page;
