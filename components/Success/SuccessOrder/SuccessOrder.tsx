import { CheckIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { randomNumber } from '../../../utils/generateRandomNumber';
import Button from '../../Buttons/Button/Button';
import styles from './successorder.module.css';

const SuccessOrder: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const { session_id } = router.query;

  return (
    <section className={styles.container}>
      <div className={styles.numberContainer}>
        <div className={styles.checkIcon}>
          <CheckIcon className='h-8 w-8' />
        </div>
        <div>
          <p className={styles.title}>Order #{session_id?.slice(-5)}</p>
          <h4 className='text-lg'>Thank you {session ? session.user?.name : 'Guest'}</h4>
        </div>
      </div>
      <div className={styles.confirmationContainer}>
        <p>Your order is confirmed</p>
        <p className={styles.confirmationText}>
          We’ve accepted your order, and we’re getting it ready. Come back to this page for updates on your shipment
          status.
        </p>
      </div>
      <div className={styles.dileveryNumber}>
        <p className={styles.dileveryNumberText}>Tracking number:</p>
        <p>{randomNumber(12)}</p>
      </div>

      <div className={styles.orderUpdates}>
        <p>Order updates</p>
        <p className={styles.orderUpdatesText}>You’ll get shipping and delivery updates by email and text.</p>
      </div>
      <div className={styles.buttonsContainer}>
        <p
          className={styles.supporButton}
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
