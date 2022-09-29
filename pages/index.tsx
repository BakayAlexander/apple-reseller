import type { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Promo from '../components/Landing/Promo';
import Products from '../components/Products/Products';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import { Category } from './api/getCategories';
import { Product } from './api/getProducts';

type HomeProps = {
  categories: Category[];
  products: Product[];
  session: Session | null;
};

const Home: React.FC<HomeProps> = ({ categories, products, session }) => {
  return (
    <div>
      <Head>
        <title>Apple Reseller</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <Promo />
      <Products
        categories={categories}
        products={products}
      />
      <ShoppingCart />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async context => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return { props: { categories, products, session } };
};
