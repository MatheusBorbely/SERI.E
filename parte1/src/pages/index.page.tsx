import React from 'react';
import { GetStaticProps } from 'next';
import Home, { HomeProps } from './home/index.page';
import { fetchProducts } from '@/utils/fetchProducts';

const IndexPage: React.FC<HomeProps> = (props) => {
  return <Home {...props} />;
};

export default IndexPage;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
    revalidate: (60 * 60) * 1 // 1 HOUR
  };
};
