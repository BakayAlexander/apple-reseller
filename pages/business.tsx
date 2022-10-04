import Head from 'next/head';
import React from 'react';
import ButtonRef from '../components/Buttons/ButtonRef/ButtonRef';
import Header from '../components/Header/Header';

const Business: React.FC = () => {
  return (
    <>
      <Head>
        <title>Apple Reseller</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <main>
        <section className='flex h-[50vh] flex-col items-center justify-center'>
          <h1 className='mt-20 mb-8 text-2xl'>
            Thank you for visiting. Visit my other projects by following link bellow.
          </h1>
          <ButtonRef
            title='Porfolio'
            link='https://bakay.dev'
          />
        </section>
      </main>
    </>
  );
};
export default Business;
