import Head from 'next/head';
import React from 'react';
import ExploreContent from '../components/ExploreContent/ExploreContent';
import Header from '../components/Header/Header';

type ExploreProps = {};

const Explore: React.FC<ExploreProps> = () => {
  return (
    <>
      <Head>
        <title>Explore</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <main>
        <ExploreContent />
      </main>
    </>
  );
};
export default Explore;
