import { styled } from "../../../../../stitches.config";

export const FullBannerContainer = styled('section',{
    paddingTop: '34.9%', 
    position: 'relative',
    overflow: 'hidden',
  
    img:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    footer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '$7',
        zIndex: '2',
        transition: '  .3s',
        position: 'absolute',
        bottom: '4.5rem',
        width: '100%',
        flexDirection: 'column',

        opacity: 0,
        transform: 'scale(0)',
        
        h2:{
            color: '$white',
            fontSize: '$2xxl',
            textTransform: 'uppercase',
            fontWeight: '$bold',
            letterSpacing: '1.2rem',

            '@mobileL': {
                lineHeight: '$base'
            }, 
            '@mobile': {
                fontSize: '$xl',
            }, 
        },
        a:{
            color: '$white',
            fontSize: '$xs',
            textTransform: 'uppercase',
            fontWeight: '$extraBold',
            letterSpacing: '.18rem',
            fontStyle: 'italic',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.81rem'
        },
        '@tablet': {
            transform: 'scale(1)',
            opacity: 1,
        },
    },
    '&:hover footer':{
        transform: 'scale(1)',
        opacity: 1,
    }, 
    '@mobileL': {
        paddingTop: '60.9%',
    }, 
    '@mobile': {
        paddingTop: '100.9%',
    }, 
});
