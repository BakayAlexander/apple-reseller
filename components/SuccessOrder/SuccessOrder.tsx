import { CheckIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React from 'react';
import { randomNumber } from '../../utils/generateRandomNumber';
import Button from '../Button/Button';
import styles from './successorder.module.css';

type SuccessOrderProps = {};

const SuccessOrder: React.FC<SuccessOrderProps> = () => {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <section className={styles.successOrder}>
      <div className={styles.successOrderNumberContainer}>
        <div className={styles.successOrderCheckIcon}>
          <CheckIcon className='h-8 w-8' />
        </div>
        <div>
          <p className={styles.successOrderTitle}>Order #{session_id?.slice(-5)}</p>
          <h4 className='text-lg'>Thank you</h4>
        </div>
      </div>
      <div className={styles.successOrderConfirmationContainer}>
        <p>Your order is confirmed</p>
        <p className={styles.successOrderConfirmationContainerText}>
          We’ve accepted your order, and we’re getting it ready. Come back to this page for updates on your shipment
          status.
        </p>
      </div>
      <div className={styles.successOrderDileveryNumber}>
        <p className={styles.successOrderDileveryNumberText}>Tracking number:</p>
        <p>{randomNumber(12)}</p>
      </div>

      <div className={styles.successOrderUpdates}>
        <p>Order updates</p>
        <p className={styles.successOrderUpdatesText}>You’ll get shipping and delivery updates by email and text.</p>
      </div>
      <div className={styles.successOrderButtonsContainer}>
        <p
          className={styles.successOrderSupporButton}
          onClick={() => router.push('/support')}
        >
          Need help? Contact us
        </p>
        <Button
          title='Continue Shopping'
          onClick={() => router.push('/')}
          padding='py-4'
        />
      </div>
    </section>
  );
};
export default SuccessOrder;
