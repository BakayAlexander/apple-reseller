import { Tab } from '@headlessui/react';
import React from 'react';
import { Category } from '../../pages/api/getCategories';
import { Product } from '../../pages/api/getProducts';
import styles from './products.module.css';

type ProductsProps = {
  categories: Category[];
  products: Product[];
};

const Products: React.FC<ProductsProps> = ({ categories, products }) => {
  const filterProductsByCategory = (category: number) => {
    const filtredProducts = products.filter(product => {
      product.category._ref === categories[category]._id;
    });
    return filtredProducts.map(product => <Product />);
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
            <Tab.Panel className='tabPanel'>{}</Tab.Panel>
            <Tab.Panel className='tabPanel'>{}</Tab.Panel>
            <Tab.Panel className='tabPanel'>{}</Tab.Panel>
            <Tab.Panel className='tabPanel'>{}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};
export default Products;
