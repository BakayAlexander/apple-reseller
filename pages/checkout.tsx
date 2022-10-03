import Head from 'next/head';
import React from 'react';
import CheckoutBlock from '../components/Checkout/CheckoutBlock/CheckoutBlock';
import Header from '../components/Header/Header';

const checkout: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shopping cart</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <CheckoutBlock />
    </>
  );
};
export default checkout;
