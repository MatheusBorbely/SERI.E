import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import Image from 'next/image';

import { NextImage } from '@/interfaces/NextImage';
import { CentralHalfBannerContainer } from './styles';


interface CentralHalfBannerProps {
    name: string,
    link: string,
    image: NextImage
}
  
export function CentralHalfBanner({name, link, image}: CentralHalfBannerProps) {
    return (
      <CentralHalfBannerContainer>
        <Image src={image} width={image.width} height={image.height} alt={name}/>
        <footer>
          <h2>{name}</h2>
          <Link href={link}>
            ACESSAR JÁ
            <ArrowRight size={16} weight="bold" />
          </Link>
        </footer>
      </CentralHalfBannerContainer>
    )
}