import React, { ChangeEvent, useEffect, useState } from 'react';
import { Category } from '../../pages/api/getCategories';
import { Product } from '../../pages/api/getProducts';
import Button from '../Buttons/Button/Button';
import ShoppingCart from '../Buttons/ShoppingCart/ShoppingCart';
import ProductCard from '../Main/ProductCard/ProductCard';
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
    <main>
      <section className={styles.container}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.inputContainer}>
          <input
            type='text'
            value={inputFilter}
            placeholder='Type to search'
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        {filtredProducts.length > 0 ? (
          <div className={styles.productsContainer}>
            {filtredProducts.map(product => (
              <ProductCard
                product={product}
                key={product._id}
                productsPage
              />
            ))}
          </div>
        ) : (
          <div className={styles.notFound}>
            <h3 className={styles.notFoundTitle}>No products found</h3>
            <Button
              title='Reset Search'
              onClick={resetSearch}
            />
          </div>
        )}

        <ShoppingCart />
      </section>
    </main>
  );
};
export default AllProducts;
