import React from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';
import ExploreGridContent from '../ExploreGridContent/ExploreGridContent';
import ExploreImageBlock from '../ExploreImageBlock/ExploreImageBlock';
import styles from './explorepromo.module.css';

const cards = [
  { title: 'Why Mac', subtitles: ['Incredible power.', 'Incredibly simple.'], imageLink: '/imac.jpeg' },
  {
    title: 'Continuity',
    subtitles: ['All your devices.', 'One seamless experience.'],
    imageLink: '/devices.jpg',
  },
];

const ExplorePromo: React.FC = () => {
  return (
    <main>
      <section className={styles.container}>
        <h1 className={styles.title}>Explore</h1>
        <ExploreGridContent
          titles={['Power', 'To Change', 'Everything']}
          buttonLink='https://www.youtube.com/watch?v=DOPswcaSsu8&ab_channel=MarquesBrownlee'
          textContent='Say hello to a Mac that is extreme in every way. With the greatest performance, expansion, and
        configurability yet, it is a system created to let a wide range of professionals push the limits of what is
        possible.'
          imageLink='/macpro.jpeg'
        />
        <ExploreImageBlock
          titles={['New MacBook Air', 'With M2 Chip']}
          imageLink='/airm2.jpeg'
        />
        <div className={styles.cardsBlock}>
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
export default ExplorePromo;
