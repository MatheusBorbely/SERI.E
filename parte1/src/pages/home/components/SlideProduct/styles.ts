import { Container } from "@/styles/global";
import { styled } from "@stitches/react";



export const SlideProductNavigation = styled(Container,{
    position: 'relative',
    '& .swiper-button':{
        position: 'absolute',
        top: '-20px',
        transform: 'translateY(-50%)',
        zIndex: '5',
        cursor: 'pointer',
        height: 24
    },
    '& .swiper-button.next':{
        right: 0
    },
    '& .swiper-button.prev':{
        left: 0
    },
    '& .swiper-button-disabled':{
        cursor: 'not-allowed',
        opacity: .5
    }   
});

