import { Tab } from '@headlessui/react';
import React from 'react';
import { Category } from '../../pages/api/getCategories';
import { Product } from '../../pages/api/getProducts';
import ProductCard from '../ProductCard/ProductCard';
import styles from './products.module.css';

type ProductsProps = {
  categories: Category[];
  products: Product[];
};

const Products: React.FC<ProductsProps> = ({ categories, products }) => {
  const filterProductsByCategory = (categoryNumber: number) => {
    return products
      .filter(product => product.category._ref === categories[categoryNumber]._id)
      .map(product => (
        <ProductCard
          product={product}
          key={product._id}
        />
      ));
  };

  return (
    <section className={styles.products}>
      <div className={styles.productsContainer}>
        <h1 className={styles.productsTitle}>New Promos</h1>
        <Tab.Group>
          <Tab.List className={styles.productsTabs}>
            {categories.map(category => (
              <Tab
                key={category._id}
                id={category._id}
                className={({ selected }) => (selected ? styles.productsTabSelected : styles.productsTabUnselected)}
              >
                {category.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className={styles.productsPanels}>
            <Tab.Panel className={styles.productsPanel}>{filterProductsByCategory(0)}</Tab.Panel>
            <Tab.Panel className={styles.productsPanel}>{filterProductsByCategory(1)}</Tab.Panel>
            <Tab.Panel className={styles.productsPanel}>{filterProductsByCategory(2)}</Tab.Panel>
            <Tab.Panel className={styles.productsPanel}>{filterProductsByCategory(3)}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};
export default Products;
