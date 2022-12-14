import { Tab } from '@headlessui/react';
import React from 'react';
import { Category } from '../../../pages/api/getCategories';
import { Product } from '../../../pages/api/getProducts';
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
    <section className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <Tab.Group>
        <Tab.List className={styles.tabs}>
          {categories.map(category => (
            <Tab
              key={category._id}
              id={category._id}
              className={({ selected }) => (selected ? styles.selectedTab : styles.tab)}
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={styles.panelsContainer}>
          <Tab.Panel className={styles.panel}>{filterProductsByCategory(0)}</Tab.Panel>
          <Tab.Panel className={styles.panel}>{filterProductsByCategory(1)}</Tab.Panel>
          <Tab.Panel className={styles.panel}>{filterProductsByCategory(2)}</Tab.Panel>
          <Tab.Panel className={styles.panel}>{filterProductsByCategory(3)}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};
export default Products;
