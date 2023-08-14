import { Container } from "@/styles/global";
import { styled } from "../../../../stitches.config";

export const HeaderWrapper = styled('header',{
    backgroundColor: '$black700',
    padding: '$4 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    
    nav:{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        
        ul:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$4',

            a:{
                color: '$white',
                fontSize: '$sm',
                textTransform: 'uppercase',
                fontWeight: '$bold',
                position: 'relative',

                '&::after':{
                    content: '',
                    position: 'absolute',
                    bottom: '-5px',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    backgroundColor: '$white',
                    transform: 'scaleX(0)',
                    transition: 'transform .3s',
                },
                '&:hover::after':{
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                }
            },
            '@tablet': {
                position: 'absolute',
                top: '9rem',
                left: '$4',
                flexDirection: 'column',
                alignItems: 'flex-start'
    
            }, 
        },
        '@tablet': {
            display: 'none',
            position: 'absolute',
            top: '-44px',
            height: '120vh',
            width: '100%',
            backgroundColor: '$black700',
            left: 0,
            zIndex: 100,

            '&.active':{
                display: 'flex'
            }

        },       
    }
})

export const HeaderContainer = styled(Container,{
    display: 'flex',
    alignItems: 'center',
    gap: '$4',

    '& > h1': {
        display: 'flex',
        img:{
            display: 'flex',
        },
        '@tablet': {
            flex: 1,
            justifyContent: 'center'
        }, 
    },
})

export const HeaderInput = styled('div',{
    display: 'flex',
    alignItems: 'center',
    gap: '.69rem',
    padding: '0 1.94rem 0 4.88rem',

    input:{
        all: 'unset',
        backgroundColor: 'transparent',
        color: '$white',
        fontFamily: '$arimo',
        fontSize: '$xxs',
        lineHeight: '92.4%',
        letterSpacing: '0.03125rem',
        textTransform: 'uppercase',

        '&::placeholder':{
            opacity: 1,
        },
        '@mobile': {
            display: 'none',
            background: 'white',
            padding: '10px 20px',
            position: 'absolute',
            bottom: '-41px',
            left: '11%',
            color: 'black',
            width: '70%',

            '&.active':{
                display: 'block',
            }
        },  
    },
    '@tablet': {
        padding: 0
    }, 
})

export const HeaderIcons = styled('div',{
    display: 'flex',
    alignItems: 'center',
    gap: '$8',

    a:{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '$1',
        span:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '19px',
            width: '19px',
            borderRadius: '$full',
            backgroundColor: '$white',

            color: '$black700',
            fontSize: '$xs',
            fontWeight: '$extraBold',     
        }
    },
    '@tablet': {
        gap: '$4',
    }, 
    
})
export const HeaderHamburguer = styled('div',{
    display: 'none',
    cursor: 'pointer',
    '& .close':{
        position: 'absolute',
        top: 0,
        right: '$4',
        zIndex:101,  
    },
    '@tablet': {
        display: 'block',
    }, 
})
