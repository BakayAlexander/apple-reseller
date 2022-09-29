import { ChevronUpIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { StripeProduct } from '../../utils/fetchLineItems';
import styles from './successitemscart.module.css';

type SuccessItemsCartProps = {
  products: StripeProduct[];
};

const SuccessItemsCart: React.FC<SuccessItemsCartProps> = ({ products }) => {
  const subtotal = products.reduce((acc, product) => acc + product.price.unit_amount / 100, 0);

  return (
    <section className={styles.successItemsCart}>
      <div className={styles.successItemsCartContainer}>
        <div className={styles.successItemsCartProductsContainer}>
          {products.map(product => (
            <div
              key={product.id}
              className={styles.successItemsCartProduct}
            >
              <div className={styles.successItemsCartProductContainer}>
                <div className={styles.successItemsCartImage}>
                  <Image
                    src='https://rb.gy/vsvv2o'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className={styles.successItemsCartProductQuantity}>{product.quantity}</div>
              </div>
              <p className={styles.successItemsCartProductDescription}>{product.description}</p>
              <p>
                <Currency
                  quantity={product.price.unit_amount / 100}
                  currency={product.currency}
                />
              </p>
            </div>
          ))}
        </div>
        <div className={styles.successItemsCartPricesContainer}>
          <div className={styles.successItemsCartPrice}>
            <p className={styles.successItemsCartPriceText}>Subtotal</p>
            <p className={styles.successItemsCartPriceCurrency}>
              <Currency quantity={subtotal} />
            </p>
          </div>
          <div className={styles.successItemsCartPrice}>
            <p className={styles.successItemsCartPriceText}>Discount</p>
            <p className={styles.successItemsCartPriceCurrency}></p>
          </div>
          <div className={styles.successItemsCartPrice}>
            <p className={styles.successItemsCartPriceText}>Shipping</p>
            <p className={styles.successItemsCartPriceCurrency}>
              <Currency
                quantity={20}
                currency='USD'
              />
            </p>
          </div>
        </div>
        <div className={styles.successItemsCartTotalPrice}>
          <p>Total</p>
          <p className={styles.successItemsCartTotalPriceText}>
            USD
            <span className={styles.successItemsCartTotalPriceCurrency}>
              <Currency quantity={subtotal + 20} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SuccessItemsCart;
