import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import AllProducts from '../components/AllProducts/AllProducts';
import Header from '../components/Header/Header';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import { Category } from './api/getCategories';
import { Product } from './api/getProducts';

type ProductsProps = {
  categories: Category[];
  products: Product[];
  session: Session | null;
};

const Products: React.FC<ProductsProps> = ({ categories, products }) => {
  return (
    <>
      <Head>
        <title>Products</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <AllProducts
        categories={categories}
        products={products}
      />
    </>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps<ProductsProps> = async context => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return { props: { categories, products, session } };
};
