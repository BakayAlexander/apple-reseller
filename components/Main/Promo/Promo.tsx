import Image from 'next/image';
import React from 'react';
import Button from '../../Buttons/Button/Button';
import styles from './promo.module.css';

const Promo: React.FC = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <span className={(styles.titleText, styles.textColored)}>Powered</span>
            <span className={styles.titleText}>By Stripe & Sanity </span>
            <span className={styles.titleText}>Driven By NextJS</span>
          </h1>
          <div className='space-x-8'>
            <Button title='Buy Now' />
            <a className={styles.link}>Learn more</a>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src='/iphone.png'
            alt='iPhone photo'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </section>
    </main>
  );
};
export default Promo;
