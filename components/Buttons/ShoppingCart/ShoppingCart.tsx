import { ShoppingBagIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector, totalPriceSelector } from '../../../redux/cartSlice';
import styles from './shoppingcart.module.css';

const ShoppingCart: React.FC = () => {
  const itemsInCart = useSelector(cartItemsSelector);
  const totalPrice = useSelector(totalPriceSelector);

  return (
    <Link href='/checkout'>
      <div className={styles.container}>
        {!!itemsInCart.length && <span className={styles.amount}>{itemsInCart.length}</span>}
        <ShoppingBagIcon className={styles.icon} />
      </div>
    </Link>
  );
};
export default ShoppingCart;
