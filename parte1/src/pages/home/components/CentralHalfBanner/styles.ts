import { styled } from "../../../../../stitches.config";

export const CentralHalfBannerContainer = styled('article',{
    paddingTop: '19.70%', 
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
        top: '50%',
        transform:'translateY(-50%) scale(0)',
        width: '100%',
        flexDirection: 'column',
        opacity: 0,
      
        h2:{
            color: '$white',
            fontSize: '$2xl',
            textTransform: 'uppercase',
            fontWeight: '$black',
            letterSpacing: '1.2rem',
            '@mobileL': {
                fontSize: '$4',
                letterSpacing: 'unset',
                lineHeight: '$base'
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
            transform: 'translateY(-50%) scale(1)',
            opacity: 1,
        },
    },
    '&:hover footer':{
        transform: 'translateY(-50%) scale(1)',
        opacity: 1,
    },
    
    '@tablet': {
        paddingTop: '32.7%',
    },
    '@mobileL': {
        paddingTop: '53.7%',
    }, 
});
