import { ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Product } from '../../../pages/api/getProducts';
import { addToCart } from '../../../redux/cartSlice';
import { urlFor } from '../../../sanity';
import styles from './productcard.module.css';

type ProductCardProps = { product: Product; productsPage?: boolean };

const ProductCard: React.FC<ProductCardProps> = ({ product, productsPage }) => {
  const dispatch = useDispatch();

  const addItemToShoppingCart = () => {
    dispatch(addToCart(product));

    toast.success(`${product.title} added to shopping cart`);
  };

  return (
    <div className={productsPage ? styles.containerForProductsPage : styles.container}>
      <div className={styles.image}>
        <Image
          src={urlFor(product.image[0]).url()}
          alt='Product Image'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.textContainer}>
        <div className={productsPage ? styles.textForProductsPage : styles.text}>
          <p>{product.title}</p>
          <p>{product.price} $</p>
        </div>
        <div
          className={styles.shoppingCart}
          onClick={addItemToShoppingCart}
        >
          <ShoppingCartIcon className={styles.shoppingCartIcon} />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
