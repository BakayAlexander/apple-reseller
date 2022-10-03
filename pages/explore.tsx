import Head from 'next/head';
import React from 'react';
import ExplorePromo from '../components/Explore/ExplorePromo/ExplorePromo';
import Header from '../components/Header/Header';

const Explore: React.FC = () => {
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
      <ExplorePromo />
    </>
  );
};
export default Explore;
