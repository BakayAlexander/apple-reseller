import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header/Header';
import SuccessItemsCart from '../components/SuccessItemsCart/SuccessItemsCart';
import SuccessOrder from '../components/SuccessOrder/SuccessOrder';
import { fetchLineItems, StripeProduct } from '../utils/fetchLineItems';

type SuccessProps = {
  products: StripeProduct[];
};

const Success: React.FC<SuccessProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Thank you!</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <main>
        <SuccessOrder />
        <SuccessItemsCart products={products} />
      </main>
    </>
  );
};
export default Success;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string;
  const products = await fetchLineItems(sessionId);

  return {
    props: {
      products,
    },
  };
};
