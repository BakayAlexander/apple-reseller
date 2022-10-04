import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../redux/cartSlice';
import styles from './header.module.css';

const Header: React.FC = () => {
  const { data: session } = useSession();

  const itemsInCart = useSelector(cartItemsSelector);

  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <div className={styles.logo}>
            <Image
              src='https://rb.gy/vsvv2o'
              alt='Header apple logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <Link href='/products'>Products</Link>
        </div>
        <div className={styles.link}>
          <Link href='/explore'> Explore</Link>
        </div>
        <div className={styles.link}>
          <Link href='/contact'> Contact</Link>
        </div>
        <a className={styles.link}>Business</a>
      </div>
      <div className={styles.iconsContainer}>
        <SearchIcon className={styles.icon} />
        <Link href='/checkout'>
          <div className={styles.cartContainer}>
            {!!itemsInCart.length && <span className={styles.cartNumber}>{itemsInCart.length}</span>}
            <ShoppingBagIcon className={styles.icon} />
          </div>
        </Link>
        {session ? (
          <Image
            src={session.user?.image || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
            alt='User avatar'
            className={styles.userAvatar}
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className={styles.icon}
            onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
};
export default Header;
