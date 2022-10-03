import { ChevronDownIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Currency from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import { Stripe } from 'stripe';
import { Product } from '../../../pages/api/getProducts';
import { cartItemsSelector, totalPriceSelector } from '../../../redux/cartSlice';
import { fetchPostJSON } from '../../../utils/apiHelpers';
import getStripe from '../../../utils/getStripe';
import Button from '../../Buttons/Button/Button';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import styles from './checkoutblock.module.css';

const CheckoutBlock: React.FC = () => {
  const router = useRouter();
  const itemsInCart = useSelector(cartItemsSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const [groupedItems, setGroupedItems] = useState({} as { [key: string]: Product[] });
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    setLoading(true);

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON('/api/checkoutSessions', {
      items: itemsInCart,
    });

    if ((checkoutSession as any).statusCode === 500) {
      console.log((checkoutSession as any).message);
      return;
    }

    //Redirect to stripe payment portal
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.log(error.message);

    setLoading(false);
  };

  useEffect(() => {
    const groupedItems = itemsInCart.reduce((acc, item) => {
      (acc[item._id] = acc[item._id] || []).push(item);
      return acc;
    }, {} as { [key: string]: Product[] });

    setGroupedItems(groupedItems);
  }, [itemsInCart]);

  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{!!itemsInCart.length ? 'Review your cart.' : 'Your cart is empty.'}</h1>
        <p>Free delivery and returns.</p>
        {itemsInCart.length === 0 && (
          <Button
            title='Continue shopping'
            onClick={() => router.push('/')}
          />
        )}
      </div>
      {!!itemsInCart.length && (
        <div className={styles.productsContainer}>
          {Object.entries(groupedItems).map(([key, items]) => (
            <CheckoutProduct
              key={key}
              items={items}
              id={key}
            />
          ))}
          <div className={styles.paymentContainer}>
            <div className={styles.payment}>
              <div className='pb-4'>
                <div className={styles.paymentItem}>
                  <p>Subtotal</p>
                  <p>
                    <Currency
                      quantity={totalPrice}
                      currency='USD'
                    />
                  </p>
                </div>
                <div className={styles.paymentItem}>
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
                <div className={styles.paymentItem}>
                  <div className={styles.paymentTaxes}>
                    Estimated tax for:{' '}
                    <p className={styles.zipCode}>
                      Enter zip code
                      <ChevronDownIcon className='h-6 w-6' />
                    </p>
                  </div>
                  <p>$ -</p>
                </div>
              </div>

              <div className={styles.totalPayment}>
                <h4>Total</h4>
                <h4>
                  <Currency
                    quantity={totalPrice}
                    currency='USD'
                  />
                </h4>
              </div>
            </div>

            <div className={styles.paymentOptionsContainer}>
              <h4 className={styles.paymentOptionsTitle}>How would you like to check out?</h4>
              <div className={styles.paymentOptions}>
                <div className={styles.paymentMonthly}>
                  <h4 className={styles.paymentMonthlyTitle}>
                    <span>Pay Monthly</span>
                    <span>with Special Card</span>
                    <span>
                      $283.16/mo. at 0% APR<sup className='-top-1'>◊</sup>
                    </span>
                  </h4>
                  <Button title='Check Out with Special Card Monthly Installments' />
                  <p className={styles.paymentMonthlyDescription}>
                    $0.00 due today, which includes applicable full-price items, down payments, shipping, and taxes.
                  </p>
                </div>

                <div className={styles.paymentFull}>
                  <h4 className={styles.paymentFullTitle}>
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
                    loading={loading}
                    onClick={createCheckoutSession}
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
