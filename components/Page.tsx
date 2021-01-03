import * as React from 'react';
import Image from 'next/image';
import Layout from './Layout';

type PageProps = {
  title: string;
  image: string;
  children: React.ReactNode;
};

const Page = ({ title, image, children }: PageProps) => {
  // Handle the sidebar staate from Layout so that we can toggle sidebar from anywhere

  return (
    <Layout title={title}>
      <div className="relative w-full px-4 py-24 text-center bg-black">
        <div className="relative z-20 inline-block pb-8 border-yellow-400 border-b-md">
          <h1 className="font-bold leading-tight text-white text-screen sm:text-6xl">
            {title}
          </h1>
        </div>
        <Image src={image} layout="fill" objectFit="cover" alt="" />
      </div>
      <section className="py-12">{children}</section>
    </Layout>
  );
};

export default Page;
