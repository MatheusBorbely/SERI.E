// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CaretLeft, CaretRight } from 'phosphor-react';

import 'swiper/css';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';

import { ProductCard } from '@/pages/components/ProductCard';
import { Product } from '@/interfaces/Product';

import { SlideProductNavigation } from './styles';

register();
interface SlideProductProps {
    products: Product[]
}
export function SlideProduct({products}: SlideProductProps) {
    const productsList = products.map((product) => (
        <SwiperSlide key={product.id}>
            <ProductCard {...product} />
        </SwiperSlide>
    ))
    return (
        <>
            <SlideProductNavigation>
                <div className="swiper-button prev">
                        <CaretLeft size={24}  weight="bold" />
                </div>
                <div className="swiper-button next">
                    <CaretRight size={24}  weight="bold" /> 
                </div> 
            </SlideProductNavigation>
            <Swiper
                spaceBetween={10}
                slidesPerView={1.5}
                grabCursor={true}
                navigation={{
                    nextEl: ".swiper-button.next",
                    prevEl: ".swiper-button.prev",
                    disabledClass: "swiper-button-disabled"
                }}
                breakpoints={{
                    520: {
                        slidesPerView: 2.3,
                        spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4.6,
                      spaceBetween: 7,
                    },
                }}
            >  
                {productsList}
            </Swiper>
             
        </>
    )
}
