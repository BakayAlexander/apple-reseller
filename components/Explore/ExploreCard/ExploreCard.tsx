import Image from 'next/image';
import React from 'react';
import styles from './explorecard.module.css';

type ExploreCardProps = {
  title: string;
  subtitles: string[];
  imageLink: string;
};

const ExploreCard: React.FC<ExploreCardProps> = ({ title, subtitles, imageLink }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.subtitlesContainer}>
        {subtitles.map(sub => (
          <p className={styles.subtitle}>{sub}</p>
        ))}
      </div>
      <div className={styles.image}>
        <Image
          src={imageLink}
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  );
};
export default ExploreCard;
