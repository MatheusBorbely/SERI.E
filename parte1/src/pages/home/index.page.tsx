import React from 'react';
import { GetStaticProps } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { FullBanner } from './components/FullBanner';
import { CentralHalfBanner } from './components/CentralHalfBanner';
import { Video } from './components/Video';
import { SlideProduct } from './components/SlideProduct';

import { fetchProducts } from '@/utils/fetchProducts';
import { Product } from '@/interfaces/Product';
import FullBannerImage from '@/assets/banners/fullBanners/full-banner.jpg';
import CentralHalfBanner1 from '@/assets/banners/centralHalfBanners/central-half-banner-1.jpg';
import CentralHalfBanner2 from '@/assets/banners/centralHalfBanners/central-half-banner-2.jpg';
import CentralHalfBanner3 from '@/assets/banners/centralHalfBanners/central-half-banner-3.jpg';
import { HomeContainer, HomeCentralHalfBannerList, HomeCentralHalfBanner, HomeProductContainer, HomeProductList } from './styles';

export interface HomeProps {
  products: Product[];
}

export default function Home ({ products }: HomeProps) {
  const fullBannerProps = {
    name: 'Lorem ipsum dolor.',
    link: '/',
    image: FullBannerImage,
  };

  const centralHalfBannersProps = [
    {
      id: uuidv4(),
      name: 'Lorem ipsum dolor.',
      link: '/',
      image: CentralHalfBanner1,
    },
    {
      id: uuidv4(),
      name: 'Lorem ipsum dolor.',
      link: '/',
      image: CentralHalfBanner2,
    },
  ];

  const centralHalfBannerProps = {
    name: 'Lorem ipsum dolor.',
    link: '/',
    image: CentralHalfBanner3,
  };

  const centralHalfBannerList = centralHalfBannersProps.map((banner) => (
    <CentralHalfBanner key={banner.id} {...banner} />
  ));

  return (
    <HomeContainer>
      {/* Full Banner */}
      <FullBanner {...fullBannerProps} />

      {/* Central Half Banners */}
      <HomeCentralHalfBannerList>
        {centralHalfBannerList}
      </HomeCentralHalfBannerList>

      {/* Featured Products */}
      <HomeProductContainer>
        <h2>Destaque</h2>
        <HomeProductList>
          <SlideProduct products={products} />
        </HomeProductList>
      </HomeProductContainer>

      {/* Video Section */}
      <Video />

      {/* Collection Central Half Banner */}
      <HomeCentralHalfBanner>
        <h2>Coleção</h2>
        <CentralHalfBanner {...centralHalfBannerProps} />
      </HomeCentralHalfBanner>

      {/* Another Featured Products */}
      <HomeProductContainer>
        <h2>Destaque</h2>
        <HomeProductList>
          <SlideProduct products={products} />
        </HomeProductList>
      </HomeProductContainer>
    </HomeContainer>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 1, // 1 HOUR
  };
};
