import { ShoppingBagIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector, totalPriceSelector } from '../../redux/cartSlice';
import styles from './shoppingcart.module.css';

type ShoppingCartProps = {};

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const itemsInCart = useSelector(cartItemsSelector);
  const totalPrice = useSelector(totalPriceSelector);

  return (
    <Link href='/checkout'>
      <div className={styles.shoppingCart}>
        {itemsInCart.length > 0 && <span className={styles.shoppingCartAmount}>{itemsInCart.length}</span>}
        <ShoppingBagIcon className={styles.shoppingCartIcon} />
      </div>
    </Link>
  );
};
export default ShoppingCart;
