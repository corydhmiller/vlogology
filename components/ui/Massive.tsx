import * as React from 'react';

const Massive = ({ ...props }) => {
  const { children } = props;
  return (
    <div className="my-12 sm:my-24 md:my-32">
      <div className="max-w-5xl px-4 mx-auto md:px-12 sm:px-8">
        <div className="font-bold leading-tight text-screen sm:text-7xl">
          {children}
        </div>
      </div>
      <div className="w-full h-8 mt-4 ml-auto bg-primary-400" />
    </div>
  );
};

export default Massive;
