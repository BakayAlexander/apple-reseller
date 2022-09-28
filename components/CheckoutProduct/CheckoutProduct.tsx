import { ChevronDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import { Product } from '../../pages/api/getProducts';
import { urlFor } from '../../sanity';
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, totalPriceSelector } from '../../redux/cartSlice';
import toast from 'react-hot-toast';
import Button from '../Button/Button';
import styles from './checkoutproduct.module.css';

type CheckoutProductProps = { items: Product[]; id: string };

const CheckoutProduct: React.FC<CheckoutProductProps> = ({ items, id }) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(totalPriceSelector);

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));

    toast.error(`${items[0].title} removed from cart`);
  };

  return (
    <div className={styles.checkoutProduct}>
      <div className={styles.checkoutProductImage}>
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt='Product Image'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className={styles.checkoutProductInfo}>
        <div className={styles.checkoutProductTitleContainer}>
          <div className={styles.checkoutProductTitle}>
            <h4>{items[0].title}</h4>
            <p className={styles.checkoutProductAmount}>{items.length} x</p>
          </div>
          <p className={styles.checkoutProductDetails}>
            Show product details
            <ChevronDownIcon className={styles.checkoutProductDetailsIcon} />
          </p>
        </div>
        <div className={styles.checkoutProductCurrencyContainer}>
          <h4 className={styles.checkoutProductCurrency}>
            <Currency
              quantity={items.reduce((acc, item) => acc + item.price, 0)}
              currency='USD'
            />
          </h4>
          <button
            className={styles.checkoutProductRemoveButton}
            onClick={removeItemFromCart}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutProduct;
