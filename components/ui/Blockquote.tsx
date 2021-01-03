import * as React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className="px-4 mx-4 my-8 text-lg italic font-bold text-gray-600 sm:text-2xl lg:my-16">
      {children}
    </blockquote>
  );
};

export default Button;
