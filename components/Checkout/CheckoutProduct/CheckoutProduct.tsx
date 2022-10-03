import { ChevronDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../pages/api/getProducts';
import { removeFromCart, totalPriceSelector } from '../../../redux/cartSlice';
import { urlFor } from '../../../sanity';
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
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt='Product Image'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className={styles.info}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <h4>{items[0].title}</h4>
            <p className={styles.amount}>{items.length} x</p>
          </div>
          <p className={styles.productDetails}>
            Show product details
            <ChevronDownIcon className={styles.productDetailsIcon} />
          </p>
        </div>
        <div className={styles.currencyContainer}>
          <h4 className={styles.currency}>
            <Currency
              quantity={items.reduce((acc, item) => acc + item.price, 0)}
              currency='USD'
            />
          </h4>
          <button
            className={styles.removeButton}
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
