import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../pages/api/getProducts';
import { cartItemsSelector, totalPriceSelector } from '../../redux/cartSlice';
import Button from '../Button/Button';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Currency from 'react-currency-formatter';
import { ChevronDownIcon } from '@heroicons/react/outline';
import styles from './checkoutblock.module.css';

const CheckoutBlock: React.FC = () => {
  const router = useRouter();
  const itemsInCart = useSelector(cartItemsSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const [groupedItems, setGroupedItems] = useState({} as { [key: string]: Product[] });

  useEffect(() => {
    const groupedItems = itemsInCart.reduce((acc, item) => {
      (acc[item._id] = acc[item._id] || []).push(item);
      return acc;
    }, {} as { [key: string]: Product[] });

    setGroupedItems(groupedItems);
  }, [itemsInCart]);
  return (
    <main className={styles.checkoutBlock}>
      <div className={styles.checkoutBlockTitleContainer}>
        <h1 className={styles.checkoutBlockTitle}>
          {!!itemsInCart.length ? 'Review your cart.' : 'Your cart is empty.'}
        </h1>
        <p>Free delivery and returns.</p>
        {itemsInCart.length === 0 && (
          <Button
            title='Continue shopping'
            onClick={() => router.push('/')}
          />
        )}
      </div>
      {!!itemsInCart.length && (
        <div className={styles.checkoutBlockProductsContainer}>
          {Object.entries(groupedItems).map(([key, items]) => (
            <CheckoutProduct
              key={key}
              items={items}
              id={key}
            />
          ))}
          <div className={styles.checkoutBlockPaymentContainer}>
            <div className={styles.checkoutBlockPayment}>
              <div className='pb-4'>
                <div className={styles.checkoutBlockPaymentItem}>
                  <p>Subtotal</p>
                  <p>
                    <Currency
                      quantity={totalPrice}
                      currency='USD'
                    />
                  </p>
                </div>
                <div className={styles.checkoutBlockPaymentItem}>
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
                <div className={styles.checkoutBlockPaymentItem}>
                  <div className={styles.checkoutBlockPaymentTaxes}>
                    Estimated tax for:{' '}
                    <p className={styles.checkoutBlockZipCode}>
                      Enter zip code
                      <ChevronDownIcon className='h-6 w-6' />
                    </p>
                  </div>
                  <p>$ -</p>
                </div>
              </div>

              <div className={styles.checkoutBlockPaymentItemTotal}>
                <h4>Total</h4>
                <h4>
                  <Currency
                    quantity={totalPrice}
                    currency='USD'
                  />
                </h4>
              </div>
            </div>

            <div className={styles.checkoutBlockPaymentOptionsContainer}>
              <h4 className={styles.checkoutBlockPaymentOptionsTitle}>How would you like to check out?</h4>
              <div className={styles.checkoutBlockPaymentOptions}>
                <div className={styles.checkoutBlockPaymentMonthly}>
                  <h4 className={styles.checkoutBlockPaymentMonthlyTitle}>
                    <span>Pay Monthly</span>
                    <span>with Special Card</span>
                    <span>
                      $283.16/mo. at 0% APR<sup className='-top-1'>◊</sup>
                    </span>
                  </h4>
                  <Button title='Check Out with Special Card Monthly Installments' />
                  <p className={styles.checkoutBlockPaymentMonthlyDescription}>
                    $0.00 due today, which includes applicable full-price items, down payments, shipping, and taxes.
                  </p>
                </div>

                <div className={styles.checkoutBlockPaymentFull}>
                  <h4 className={styles.checkoutBlockPaymentFullTitle}>
                    Pay in full
                    <span>
                      <Currency
                        quantity={totalPrice}
                        currency='USD'
                      />
                    </span>
                  </h4>

                  <Button
                    title='Check Out'
                    width='w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
export default CheckoutBlock;
