import { styled } from "../../../../stitches.config";

export const ProductCardContainer = styled('article',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '.37rem',
    lineHeight: 1,

    header:{
        width: '100%',
    },
    
    footer:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '.37rem',
        width: '100%',

        h2:{
            fontSize: '$md',
            color: '$black',
            fontWeight: '$bold',
        },

        'scale, span':{
            fontFamily: '$arimo',
        },

        span:{
            fontSize: '$sm'
        },
        s:{
            fontSize: '$xs',
            color: '$grey500'
        }, 
    }
});
