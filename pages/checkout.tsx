import Head from 'next/head';
import React from 'react';
import CheckoutBlock from '../components/CheckoutBlock/CheckoutBlock';
import Header from '../components/Header/Header';

type checkoutProps = {};

const checkout: React.FC<checkoutProps> = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#E7ECEE]'>
      <Head>
        <title>Shopping cart</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <CheckoutBlock />
    </div>
  );
};
export default checkout;
