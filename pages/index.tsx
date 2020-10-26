import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <Layout title="Title">
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          Main page body bru
        </main>
      </div>
    </Layout>
  );
}
