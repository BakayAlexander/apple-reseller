import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';
import styles from './promo.module.css';

type PromoProps = {};

const Promo: React.FC<PromoProps> = () => {
  return (
    <main>
      <section className={styles.promo}>
        <div className={styles.promoTitleContainer}>
          <h1 className={styles.promoTitle}>
            <span className={(styles.promoTitleText, styles.promoTitleText_Colored)}>Powered</span>
            <span className={styles.promoTitleText}>By Stripe & Sanity </span>
            <span className={styles.promoTitleText}>Driven By NextJS</span>
          </h1>
          <div className='space-x-8'>
            <Button title='Buy Now' />
            <a className={styles.promoLink}>Learn more</a>
          </div>
        </div>
        <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]'>
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
