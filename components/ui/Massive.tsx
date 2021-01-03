import * as React from 'react';

const Massive = ({ ...props }) => {
  const { children } = props;
  return (
    <>
      <div className="max-w-5xl px-4 mx-auto my-12 md:px-12 sm:px-8">
        <div className="font-bold leading-tight text-screen sm:text-6xl">
          {children}
        </div>
      </div>
      <div className="w-full h-8 mb-12 ml-auto bg-yellow-400" />
    </>
  );
};

export default Massive;
