import React, { ChangeEvent, useEffect, useState } from 'react';
import { Category } from '../../pages/api/getCategories';
import { Product } from '../../pages/api/getProducts';
import Button from '../Button/Button';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from './allproducts.module.css';

type AllProductsProps = {
  categories: Category[];
  products: Product[];
};

const AllProducts: React.FC<AllProductsProps> = ({ categories, products }) => {
  const [filtredProducts, setFiltredProducts] = useState(products);
  const [inputFilter, setInputFilter] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const filtred = products.filter(product => product.title.toLowerCase().includes(inputFilter.toLowerCase()));
      setFiltredProducts(filtred);
    }, 1000);
  }, [inputFilter]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const resetSearch = () => {
    setFiltredProducts(products);
    setInputFilter('');
  };

  return (
    <section className={styles.allProducts}>
      <h2 className={styles.allProductsTitle}>Products</h2>
      <div className={styles.allProductsInputContainer}>
        <input
          type='text'
          value={inputFilter}
          placeholder='Type to search'
          onChange={handleInputChange}
          className={styles.allProductsInput}
        />
      </div>
      {filtredProducts.length > 0 ? (
        <div className={styles.allProductsItemsContainer}>
          {filtredProducts.map(product => (
            <ProductCard
              product={product}
              key={product._id}
              productsPage
            />
          ))}
        </div>
      ) : (
        <div className={styles.allProductsNotFoundContainer}>
          <h3 className={styles.allProductsNotFoundTitle}>No products found</h3>
          <Button
            title='Reset Search'
            onClick={resetSearch}
          />
        </div>
      )}

      <ShoppingCart />
    </section>
  );
};
export default AllProducts;
