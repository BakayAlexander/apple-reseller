import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const session = false;

  return (
    <header className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <Link href='/'>
          <div className={styles.headerLogo}>
            <Image
              src='https://rb.gy/vsvv2o'
              alt='Header apple logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </Link>
      </div>
      <div className={styles.headerLinks}>
        <a className={styles.headerLink}>Product</a>
        <a className={styles.headerLink}>Explore</a>
        <a className={styles.headerLink}>Support</a>
        <a className={styles.headerLink}>Business</a>
      </div>
      <div className={styles.headerSearchCartContainer}>
        <SearchIcon className={styles.headerIcon} />
        <Link href='/chekcout'>
          <div className={styles.headerCartContainer}>
            <span className={styles.headerCartNumber}>2</span>
            <ShoppingBagIcon className={styles.headerIcon} />
          </div>
        </Link>
        {session ? (
          <Image
            src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
            alt='User avatar'
            className={styles.headerUserAvatar}
            width={34}
            height={34}
            onClick={() => console.log('first')}
          />
        ) : (
          <UserIcon
            className={styles.headerIcon}
            onClick={() => console.log('first')}
          />
        )}
      </div>
    </header>
  );
};
export default Header;
