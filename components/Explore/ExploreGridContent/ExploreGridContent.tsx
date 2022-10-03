import Image from 'next/image';
import React from 'react';
import ButtonRef from '../../Buttons/ButtonRef/ButtonRef';
import styles from './exploregridcontent.module.css';

type ExploreGridContentProps = {
  titles: string[];
  buttonLink: string;
  textContent: string;
  imageLink: string;
};

const ExploreGridContent: React.FC<ExploreGridContentProps> = ({ titles, buttonLink, textContent, imageLink }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.titleContainer}>
          <span className={styles.title}>{titles[0]}</span>
          <span className={styles.title}>{titles[1]}</span>
          <span className={styles.title}>{titles[2]}</span>
        </h2>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <p className={styles.buttonText}>Watch the film</p>
            <ButtonRef
              title='YouTube'
              link={buttonLink}
            />
          </div>
          <div className={styles.textContent}>{textContent}</div>
        </div>
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
export default ExploreGridContent;
