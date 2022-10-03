import Image from 'next/image';
import React from 'react';
import styles from './exploreimageblock.module.css';

type ExploreImageBlockProps = {
  titles: string[];
  imageLink: string;
};

const ExploreImageBlock: React.FC<ExploreImageBlockProps> = ({ titles, imageLink }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageLink}
        layout='fill'
        objectFit='contain'
      />
      <p className={styles.titleLeft}>{titles[0]}</p>
      <p className={styles.titleRight}>{titles[1]}</p>
    </div>
  );
};
export default ExploreImageBlock;
