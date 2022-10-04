import React from 'react';
import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import ContactForm from '../ContactForm/ContactForm';
import ExploreCard from '../../Explore/ExploreCard/ExploreCard';
import styles from './contactblock.module.css';

const cards = [
  { title: 'Accident happens', subtitles: ['AppleCare+', 'Covers them.'], imageLink: '/care.jpeg' },
  {
    title: 'Trade in with Apple',
    subtitles: ['Change your devices.', 'Protect nature.'],
    imageLink: '/tradein.jpeg',
  },
];

const ContactBlock: React.FC = () => {
  return (
    <main>
      <section className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.columnsContainer}>
          <div className={styles.supportText}>
            <p className={styles.description}>
              We take our commitment to our customers seriously. If you need our help with products or you have a
              questions, please do not hesitate to contact us.
            </p>
            <div className={styles.address}>
              <p>Istanbul</p>
              <p>Some street 16/1</p>
            </div>
            <div className={styles.phoneAndMail}>
              <div className={styles.phoneAndMailBox}>
                <PhoneIcon className={styles.phoneAndMailIcon} />
                <p>+90 (545) 184-10-29</p>
              </div>
              <div className={styles.phoneAndMailBox}>
                <MailIcon className={styles.phoneAndMailIcon} />
                <p>bakay.dvr@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {cards.map(card => (
            <ExploreCard
              title={card.title}
              subtitles={card.subtitles}
              imageLink={card.imageLink}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default ContactBlock;
