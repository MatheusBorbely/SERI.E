import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';

import { NextImage } from '@/interfaces/NextImage';
import { FullBannerContainer } from './styles';

interface FullBannerProps {
  name: string,
  link: string,
  image: NextImage
}

export function FullBanner({name, link, image}: FullBannerProps) {
  return (
    <FullBannerContainer>
      <Image src={image} width={image.width} height={image.height} alt={name}/>
      <footer>
        <h2>{name}</h2>
        <Link href={link}>
          ACESSAR JÁ
          <ArrowRight size={16} weight="bold" />
        </Link>
      </footer>
    </FullBannerContainer>
  )
}
