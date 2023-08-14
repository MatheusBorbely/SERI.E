import React from 'react'
import { ProductCardContainer } from './styles'
import { Product } from '@/interfaces/Product'
import Image from 'next/image'

export function ProductCard({name, imageUrl, price, oldPrice}: Product) {
  return (
    <ProductCardContainer>
        <header>
            <Image src={imageUrl} layout="responsive" width={338} height={530} alt={name} quality={100}/>
        </header>
        <footer>
            <h2>{ name }</h2>
            <s>{ oldPrice }</s>
            <span>{ price }</span>
        </footer>
    </ProductCardContainer>
  )
}
