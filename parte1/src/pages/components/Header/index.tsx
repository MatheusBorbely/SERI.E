import React, { useState } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { List, X } from 'phosphor-react';

import Logo from '@/assets/logo/logo.svg';
import Search from '@/assets/icons/header/search.svg';
import User from '@/assets/icons/header/user.svg';
import Cart from '@/assets/icons/header/cart.svg';

import {
  HeaderContainer,
  HeaderHamburguer,
  HeaderIcons,
  HeaderInput,
  HeaderWrapper,
} from './styles';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const arrayCollections = [
    {
      IdCategory: uuidv4(),
      name: 'shop',
      link: '#',
    },
    {
      IdCategory: uuidv4(),
      name: 'lançamentos',
      link: '#',
    },
    {
      IdCategory: uuidv4(),
      name: 'born in chaos',
      link: '#',
    },
  ];

  const collections = arrayCollections.map(({ IdCategory, name, link }) => (
    <li key={IdCategory}>
      <Link href={link}>{name}</Link>
    </li>
  ));

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderHamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 
            <X className='close' size={24} color="#ffffff" weight="bold" />
            :
            <List size={24} color="#ffffff" weight="bold" />
          }
        </HeaderHamburguer>
       
       <h1 title='Serie.e Design'>
          <Link href="/">
            <Image src={Logo} width={105} height={39} quality={100} alt="Logo Serie.e Design" />
          </Link>
       </h1>
        

        <nav className={`${isMenuOpen ? 'active' : ''}`}>
          <ul>{collections}</ul>
        </nav>
  
        <HeaderInput>
          <Image src={Search} width={19} height={19} alt="Lupa" onClick={() => setIsSearchOpen (!isSearchOpen )}/>
          <input className={`${isSearchOpen ? 'active' : ''}`} type="search" name="search" id="search" placeholder="BUSCAR PRODUTO..." />
        </HeaderInput>

        <HeaderIcons>
          <Link href="/">
            <Image src={User} width={19} height={19} alt="Usuário" />
          </Link>
          <Link href="/">
            <Image src={Cart} width={19} height={19} alt="Carrinho" />
            <span>99</span>
          </Link>
        </HeaderIcons>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
