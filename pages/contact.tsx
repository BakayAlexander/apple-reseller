import Head from 'next/head';
import React from 'react';
import ContactBlock from '../components/Contact/ContactBlock/ContactBlock';
import Header from '../components/Header/Header';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <ContactBlock />
    </>
  );
};
export default Contact;
