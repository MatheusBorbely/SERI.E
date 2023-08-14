import React from 'react';
import Image from 'next/image';

import LogoVideo from '@/assets/video/logo-video.svg';
import PlayVideo from '@/assets/video/play.svg';
import Thumbnail from '@/assets/video/thumbnail.jpg';
import { VideoContainer, VideoIcon, VideoThumbnail } from './styles';

export function Video() {
  return (
    <VideoContainer>
        <h2>#youtube</h2>
        <VideoThumbnail>
            <header>
                <div>
                    <Image src={LogoVideo} width="18" height="20" quality={100} alt='thumbnail' />
                </div>
                <h4>São Paulo, 12 de Abril de 2021.</h4>
            </header>
            <Image src={Thumbnail} layout='responsive' width={630} height={354} alt='logo serie.e design minimalista'/>
            <VideoIcon>
                <Image src={PlayVideo} width="80" height="80"  alt='Icone play'/>
            </VideoIcon>
        </VideoThumbnail>
    </VideoContainer>
  )
}
