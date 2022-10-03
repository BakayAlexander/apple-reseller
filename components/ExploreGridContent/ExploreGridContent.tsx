import Image from 'next/image';
import React from 'react';
import ButtonRef from '../ButtonRef/ButtonRef';
import styles from './exploregridcontent.module.css';

type ExploreGridContentProps = {
  titles: string[];
  buttonLink: string;
  textContent: string;
  imageLink: string;
};

const ExploreGridContent: React.FC<ExploreGridContentProps> = ({ titles, buttonLink, textContent, imageLink }) => {
  return (
    <div className={styles.exploreGridContent}>
      <div className={styles.exploreGridContentTextContainer}>
        <h2 className={styles.exploreGridContentTitleContainer}>
          <span className={styles.exploreGridContentTitle}>{titles[0]}</span>
          <span className={styles.exploreGridContentTitle}>{titles[1]}</span>
          <span className={styles.exploreGridContentTitle}>{titles[2]}</span>
        </h2>
        <div className={styles.exploreGridContentButtonContainer}>
          <div className={styles.exploreGridContentButton}>
            <p className={styles.exploreGridContentButtonText}>Watch the film</p>
            <ButtonRef
              title='YouTube'
              link={buttonLink}
            />
          </div>
          <div className={styles.exploreGridContentTextContent}>{textContent}</div>
        </div>
      </div>
      <div className={styles.exploreGridContentImage}>
        <Image
          src={imageLink}
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  );
};
export default ExploreGridContent;
