import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InstagramLogo, FacebookLogo } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import {NewsLetter} from './components/NewsLetter';
import LogoFooter from '@/assets/logo/logo-footer.svg';
import LogoSubFooter from '@/assets/logo/logo-subfooter.svg';
import LogoTray from '@/assets/logo/logo-fbits-branco.svg';
import { FooterContainer, FooterWrapper, SubFooter } from './styles';

export function Footer() {
    const LinksIntitucionais = [
        {
            id: uuidv4(),
            name: 'Sobre',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'Politicas da Loja',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'Politicas de Privacidade',
            link: '#',
        },
        {
            id: uuidv4(),
            name: 'Contato',
            link: '#',
        },
    ];
    const redesSociaisArray = [
        {
            id: uuidv4(),
            icone: <InstagramLogo className='instagram icon' size={24} weight="bold" />,
            link: 'https://www.instagram.com/seri.e_design/'
        },
        {
            id: uuidv4(),
            icone: <FacebookLogo className='facebook icon' size={24} weight="fill" />,
            link: 'https://www.facebook.com/SERIEDESIGN'
        }
    ];
    const paginasInstitucionais = LinksIntitucionais.map(({id, name, link}) => (
        <li key={id}>
            <Link href={link}>{name}</Link>
        </li>
    ));
    const redesSociais = redesSociaisArray.map(({id, icone, link}) => (
        <li key={id}>
            <Link href={link}>{icone}</Link>
        </li>
    ));
    return (
        <FooterWrapper>
            <NewsLetter />
            <FooterContainer>
                <Image src={LogoFooter} height={LogoFooter.height} width={LogoFooter.width} alt='Logo Serie.e design preto' />
                <div>
                    <h4>Precisa de ajuda?</h4>
                    <nav>
                        <ul>{paginasInstitucionais}</ul>
                    </nav>
                </div>
                <div className='redes-sociais'>
                    <h4>Redes Sociais</h4>
                    <nav>
                        <ul>{redesSociais}</ul>
                    </nav>
                </div>
            </FooterContainer>
            <SubFooter>
                <div>
                    <div>
                        <Image src={LogoTray} height={LogoTray.height} width={LogoTray.width} alt='Logo Tray Corp Branco' quality={100}/>
                        <Image src={LogoSubFooter} height={LogoSubFooter.height} width={LogoSubFooter.width} alt='Logo Serie.e design branco' quality={100}/>
                    </div>
                    <span>@2023 Todos os direitos reservados</span>
                </div>
            </SubFooter>
        </FooterWrapper>
    );
}
