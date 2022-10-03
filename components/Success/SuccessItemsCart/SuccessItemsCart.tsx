import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { StripeProduct } from '../../../utils/fetchLineItems';
import styles from './successitemscart.module.css';

type SuccessItemsCartProps = {
  products: StripeProduct[];
};

const SuccessItemsCart: React.FC<SuccessItemsCartProps> = ({ products }) => {
  const subtotal = products.reduce((acc, product) => acc + product.price.unit_amount / 100, 0);

  return (
    <section className={styles.container}>
      <div className={styles.cartContainer}>
        <div className={styles.products}>
          {products.map(product => (
            <div
              key={product.id}
              className={styles.productContainer}
            >
              <div className={styles.productInfo}>
                <div className={styles.productImage}>
                  <Image
                    src='https://rb.gy/vsvv2o'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className={styles.productQuantity}>{product.quantity}</div>
              </div>
              <p className={styles.productDescription}>{product.description}</p>
              <p>
                <Currency
                  quantity={product.price.unit_amount / 100}
                  currency={product.currency}
                />
              </p>
            </div>
          ))}
        </div>
        <div className={styles.pricesContainer}>
          <div className={styles.price}>
            <p className={styles.priceText}>Subtotal</p>
            <p className={styles.priceCurrency}>
              <Currency quantity={subtotal} />
            </p>
          </div>
          <div className={styles.price}>
            <p className={styles.priceText}>Discount</p>
            <p className={styles.priceCurrency}></p>
          </div>
          <div className={styles.price}>
            <p className={styles.priceText}>Shipping</p>
            <p className={styles.priceCurrency}>
              <Currency
                quantity={20}
                currency='USD'
              />
            </p>
          </div>
        </div>
        <div className={styles.totalPrice}>
          <p>Total</p>
          <p className={styles.totalPriceText}>
            USD
            <span className={styles.totalPriceCurrency}>
              <Currency quantity={subtotal + 20} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SuccessItemsCart;
