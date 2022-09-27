import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Promo from '../components/Landing/Promo';
import Products from '../components/Products/Products';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import { Category } from './api/getCategories';
import { Product } from './api/getProducts';

type HomeProps = {
  categories: Category[];
  products: Product[];
};

const Home: React.FC<HomeProps> = ({ categories, products }) => {
  return (
    <div>
      <Head>
        <title>Apple Redesign 2022</title>
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
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return { props: { categories, products } };
};
