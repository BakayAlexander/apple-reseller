import { ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import { Product } from '../../pages/api/getProducts';
import { urlFor } from '../../sanity';
import styles from './productcard.module.css';

type ProductCardProps = { product: Product };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <Image
          src={urlFor(product.image[0]).url()}
          alt='Product Image'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.productTextContainer}>
        <div className={styles.productText}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
        <div className={styles.productShoppingCart}>
          <ShoppingCartIcon className={styles.productShoppingCartIcon} />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
